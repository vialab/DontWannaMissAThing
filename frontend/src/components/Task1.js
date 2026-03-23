// Task 2 - Pausing method
import React, { Component } from "react";
import { useSelector, useDispatch, useStore } from "react-redux";
import "../assets/css/App.css";
import TopBar from "./TopBar";
import SubtitleText from "./SubtitleText";
import * as Subtitle from "subtitle";
import { ipcRenderer } from "electron";
import Stopwatch from "@tsdotnet/stopwatch";

const fs = window.require("fs");
import { io } from "socket.io-client";
import { createStore } from "redux";
import reducer from "../redux/reducer";
import NextPage from "./NextPage";

//var VIDEO_FILE = ".\\src\\assets\\video\\1.m4v";
//var SUBTITLE_FILE = ".\\src\\assets\\video\\1.srt";

//var VIDEO_FILE = ".\\src\\assets\\video\\2.m4v";
//var SUBTITLE_FILE = ".\\src\\assets\\video\\2.srt";

//var VIDEO_FILE = ".\\src\\assets\\video\\3.m4v";
//var SUBTITLE_FILE = ".\\src\\assets\\video\\3.srt";

//var VIDEO_FILE = ".\\src\\assets\\video\\4.m4v";
//var SUBTITLE_FILE = ".\\src\\assets\\video\\4.srt";

let VIDEO = "VIDEO1";
let VIDEO_FILE;
let SUBTITLE_FILE;

if (VIDEO === "VIDEO1") {
  VIDEO_FILE = "assets\\video\\1.m4v";
  SUBTITLE_FILE = ".\\src\\assets\\video\\1.srt";
}
else if (VIDEO === "VIDEO2") {
  VIDEO_FILE = "assets\\video\\2.m4v";
  SUBTITLE_FILE = ".\\src\\assets\\video\\2.srt";
}
else if (VIDEO === "VIDEO3") {
  VIDEO_FILE = "assets\\video\\3.m4v";
  SUBTITLE_FILE = ".\\src\\assets\\video\\3.srt";
}
else if (VIDEO === "VIDEO4") {
  VIDEO_FILE = "assets\\video\\4.m4v";
  SUBTITLE_FILE = ".\\src\\assets\\video\\4.srt";
}

var videoEnd = false;
let cursor = "";

let store = createStore(reducer);
let storeState = store.getState();

const addr = storeState["ip_address"];
const socket = io("ws://" + addr + ":8001");
const pid = storeState["participantID"];

function disableNext() {
  let nextButton = document.getElementById("nextButton");
  nextButton.className =
    "focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gray-500 hover:bg-gray-500 hover:shadow-lg cursor-not-allowed";
  nextButton.disabled = true;
}

function showNext() {
  let nextButton = document.getElementById("nextButton");
  nextButton.className =
    "focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-green-700 hover:bg-green-900 hover:shadow-lg";
  nextButton.disabled = false;
  console.log("Enable button");
}

export default class Task1 extends Component {
  constructor(props) {
    super(props);
    console.log("Props", props);
    // state
    this.state = {
      activeDemo: "pause-demo",
      gazeCursor: "enabled", // enabled or disabled
      subtitleHighlight: "disabled", // enabled or disabled
      videoFile: "",
      subtitleFile: "",
      subtitleArray: [],
      currentSubtitles: new Set(),
      stillReading: new Set(),
      doneReading: new Set(),
      currentTime: 0,
      WPM: 180,
      stackingExpiry: 2, // delay in seconds
      stackingMaxSubtitles: 3, // max number of stacked subtitles
      pausingDelay: 0, // Pausing delay in seconds
      audioTracks: [],
      audioTrackLanguages: [],
      primaryAudioTrack: "",
      secondaryAudioTrack: "",
      manualPause: false,
    };

    // Send pid -> main.js -> mobile quizzing backend
    socket.emit("pid", pid);
    // Send task questions
    socket.emit("get-qset", "VIDEO1");

    // Enable eye tracker after video loaded
    let gazeTimer = new Stopwatch();
    let lastMessage = "";
    ipcRenderer.on("gaze-pos", (event, arg) => {
      // Gaze cursor enabled
      if (this.state.gazeCursor === "enabled") {
        if (cursor === "") {
          cursor = document.getElementById("gazeCursor");
        }
        cursor.style.visibility = "visible";

        // Update position
        cursor.style.left = arg.x + "px";
        cursor.style.top = arg.y + "px";
      } else {
        cursor = document.getElementById("gazeCursor");
        cursor.style.visibility = "hidden";
      }

      if (this.state.activeDemo === "pause-demo") {
        //this.checkCollision();
        if (
          !this.state.manualPause &&
          !document.getElementById("videoPlayer").ended
        ) {
          if (arg.attention) {
            // Check for attention
            document.getElementById("videoPlayer").play();
            // Log gaze status
            if (lastMessage != "gaze_entered") {
              gazeTimer.stop();
              //console.log("Gaze entered", gazeTimer.elapsedMilliseconds / 1000);
              socket.emit("gaze_entered", gazeTimer.elapsedMilliseconds / 1000);
              gazeTimer.reset();
              lastMessage = "gaze_entered";
            }
          } else {
            if (lastMessage != "gaze_left") {
              // Log gaze status
              gazeTimer.start();
              //console.log("gaze left");
              socket.emit("gaze_left");
              lastMessage = "gaze_left";
            }
            // Pause on no attention for X seconds
            setTimeout(() => {
              document.getElementById("videoPlayer").pause();
            }, this.state.pausingDelay * 1000);
          }
        }
      }
    });
  }

  componentDidMount() {
    this.parseSubtitleFile();
    // Disable next button on start
    disableNext();
  }

  componentWillUnmount() {
    ipcRenderer.removeAllListeners();
  }

  parseSubtitleFile() {
    const srtContents = fs.readFileSync(SUBTITLE_FILE, "utf8");

    // Parse SRT/WebVTT as array
    let subtitleArray = Subtitle.parseSync(srtContents);
    console.log("Subtitles loaded successfully", subtitleArray);
    // Add timer to subtitle items
    for (let i = 0; i < subtitleArray.length; i++) {
      let timer = new Stopwatch();
      subtitleArray[i].data.timer = timer;
    }
    this.setState(function (state, props) {
      return {
        subtitleArray: subtitleArray,
        currentSubtitles: new Set(),
      };
    });
  }

  calculateSubtitleScreenTime(subtitleText) {
    /*
     * calculate time to display subtitle based on WPM
     * returns: time to display subtitle in milliseconds rounded up to the nearest thousand
     */
    const setNumWordsInText = (b) => {
      let s = b;
      s = s.replace(/(^\s*)|(\s*$)/gi, "");
      s = s.replace(/[ ]{2,}/gi, " ");
      s = s.replace(/\n /, "\n");
      return s.split(" ").length;
    };
    const numWordsInSubtitle = setNumWordsInText(subtitleText);
    return Math.max(
      1000,
      Math.floor(numWordsInSubtitle / (this.state.WPM / 60)) * 1000
    );
  }

  onPlaying() {
    // Send timestamp to quiz server
    let currentTime = document.getElementById("videoPlayer").currentTime;
    socket.emit("timestamp", currentTime);

    this.setState(function (state, props) {
      return {
        currentTime: currentTime,
      };
    });
    let currentSubtitles = this.state.currentSubtitles;

    // Check for subtitles to be removed
    for (let i = 0; i < Array.from(currentSubtitles).length; i++) {
      let subtitleItem = Array.from(currentSubtitles)[i];
      // Delete subtitles if rewinded
      if (this.state.currentTime * 1000 < subtitleItem.start) {
        currentSubtitles.delete(subtitleItem);
      }
      if (this.state.activeDemo !== "stacking-demo") {
        // Delete subtitles at normal subtitle end time
        if (Array.from(this.state.currentTime * 1000 >= subtitleItem.end)) {
          currentSubtitles.delete(subtitleItem);
        }
      }
    }

    // Check for new subtitle to be displayed
    for (let i = 0; i < this.state.subtitleArray.length; i++) {
      if (
        this.state.currentTime * 1000 >=
          this.state.subtitleArray[i].data.start &&
        this.state.currentTime * 1000 <= this.state.subtitleArray[i].data.end
      ) {
        let subtitleItem = this.state.subtitleArray[i].data;
        subtitleItem.id = i;
        subtitleItem.WPMDisplayTime = this.calculateSubtitleScreenTime(
          subtitleItem.text
        );
        subtitleItem.displayTime = subtitleItem.end - subtitleItem.start;
        subtitleItem.fixationLength = 0;

        if (!currentSubtitles.has(subtitleItem)) {
          currentSubtitles.add(subtitleItem);
        }
      }
    }

    // Update state
    this.setState(function (state) {
      return {
        currentSubtitles: currentSubtitles,
      };
    });
  }

  handleMenuButton() {
    let controls = document.getElementById("controls");
    if (controls.style.display === "none") {
      controls.style.display = "block";
    } else {
      controls.style.display = "none";
    }

    // Adjust subtitles
    let subtitle = document.getElementById("subtitles");
    if (subtitle.style.bottom === "10vh") {
      subtitle.style.bottom = "25vh";
    } else {
      subtitle.style.bottom = "10vh";
    }
  }

  handleManualPause() {
    if (this.state.activeDemo === "pause-demo") {
      if (this.state.manualPause) {
        this.setState({ manualPause: false });
        console.log("Manual play");
        document.getElementById("videoPlayer").play();
      } else {
        this.setState({ manualPause: true });
        console.log("Manual pause");
        document.getElementById("videoPlayer").pause();
      }
    }
  }

  render() {
    return (
      <div className="flex flex-col h-screen">
        <TopBar />
        <div id="gazeCursor"></div>
        <div className="flex-grow bg-gray-100 flex items-center justify-center">
          <div className="px-10">
            <div className="flex flex-col items-center bg-white rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
              <div id="video-container items-center">
                <video
                  id="videoPlayer"
                  onEnded={showNext}
                  onTimeUpdate={this.onPlaying.bind(this)}
                  onClick={this.handleManualPause.bind(this)}
                  playsInline
                  controls
                >
                  <source src={VIDEO_FILE} type="video/mp4" />
                </video>
                <SubtitleText
                  subtitles={this.state.currentSubtitles}
                  currentTime={this.state.currentTime}
                />
              </div>

              <div className="inline-block mr-2 mt-2">
                <NextPage />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
