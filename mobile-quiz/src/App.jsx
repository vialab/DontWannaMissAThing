import React from "react";
import { Component } from "react";
import { io } from "socket.io-client";
import Stopwatch from "@tsdotnet/stopwatch";

const waitingThreshold = 20; // Waiting for answer threshold in seconds

// Print local IP
// const { networkInterfaces } = require("os");
// const nets = networkInterfaces();
// const results = Object.create(null); // Or just '{}', an empty object

// for (const name of Object.keys(nets)) {
//   for (const net of nets[name]) {
//     // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
//     if (net.family === "IPv4" && !net.internal) {
//       if (!results[name]) {
//         results[name] = [];
//       }
//       results[name].push(net.address);
//     }
//   }
// }

// let addr;

// if (results["Wi-Fi"]) {
//   addr = results["Wi-Fi"][0];
// } else if (results["Ethernet"]) {
//   addr = results["Ethernet"][0];
// }

// console.log("IP Addr:", addr);

const socket = io("ws://" + window.location.hostname + ":8001");
// const ip = require("ip");
// console.log(ip.address());

// Timer
let timer = new Stopwatch();
let lastMessage = "";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beginQuiz: false,
      pid: "null",
      answered: 0,
      currentQuestion: -1,
      showScore: false,
      score: 0,
      questions: [], //qArray
      qSet: "",
    };

    /*
		socket.on('question', text => {
			console.log("Received:", text);
			this.setQuestion(text);
		});
		*/
  }

  playSound() {
    console.log("Playing notification");
    let audioPlayer = document.getElementById("audio-notification");
    audioPlayer.play();
    /*
    var context = new AudioContext();
    context.resume().then(() => {
      console.log("Playback resumed successfully");
    });
	*/
  }

  setQuestion(question) {
    this.setState({ questions: question, waiting: false });
  }

  componentDidMount() {
    let text = "Client requesting question set from server";

    //socket.emit('req', 'request');
    socket.on("set-qset", (qSet) => {
      console.log("Received question set:", qSet);
      this.setState({ qSet: qSet["name"] });
      this.setQuestion(qSet["questions"]);
      //socket.emit("req", text);
    });

    socket.on("participantID", (text) => {
      console.log("Participant ID:", text);
      this.setState({ pid: text });
    });

    socket.on("res", (text) => {
      console.log("Received question set:", text);
      this.setQuestion(text);
    });

    socket.on("question", (timestamp) => {
      console.log("Current time:", timestamp);
      // set current question based on timestamp
      for (let i = 0; i < this.state.questions.length; i++) {
        if (this.state.answered < this.state.questions.length){
          if (
            timestamp > this.state.questions[this.state.answered]["timestamp"]
          ) {
            //this.state.setState({maxAvailable: this.state.maxAvailable+1});
            console.log(
              "Show Question",
              this.state.questions[this.state.answered]
            );
            this.setState({
              currentQuestion: this.state.questions[this.state.answered],
            });
            // Play notification sound
            this.playSound();
            // Log question
            timer.start();
            if (lastMessage !== "display_question") {
              let payload = {id: this.state.questions[this.state.answered]['id'], question: this.state.questions[this.state.answered]['question']}
              socket.emit("display_question", payload);
              lastMessage = "display_question";
            }
          }
        }
        
      }
    });
  }

  componentDidUpdate() {}

  setCurrentQuestion(question) {
    this.setState({ currentQuestion: question });
  }

  handleAnswer(answer) {
    timer.stop();
    let timeElapsed = timer.elapsedMilliseconds/1000;
    timer.reset();
    
    console.log("Selected answer:", answer);
    if (answer.isCorrect) {
      console.log("Selected answer is correct");
    } else {
      console.log("Selected answer is NOT correct");
    }
    // Push response to db
    let message = {
      pid: this.state.pid,
      qSet: this.state.qSet,
      response: answer,
      timeElapsed: timeElapsed,
    };

    socket.emit("UPDATE_DB", message);
    lastMessage = "UPDATE_DB";

    // Reset question board
    this.setState({ answered: this.state.answered + 1 });
    this.setState({ currentQuestion: -1 });
    // participantID, question, selected answer, correctAnswer
    let answerLine = [
      this.state.pid,
      this.state.currentQuestion.question,
      answer.answerText,
      answer.isCorrect,
    ];
    console.log(answerLine);
  }

  handleBegin() {
    this.playSound();
    this.setState({ beginQuiz: true });
  }

  render() {
    return (
      <div className="app">
        {this.state.currentQuestion === -1 ? (
          <div>
            {!this.state.beginQuiz ? (
              <div className="score-section">
                <p>Please click begin to continue.</p>
                <button id="button-begin" onClick={this.handleBegin.bind(this)}>
                  Begin
                </button>
              </div>
            ) : (
              <div className="score-section">Waiting for next question...</div>
            )}
          </div>
        ) : (
          <div>
            <div className="question-section">
              <div className="question-count">
                <span>Question {this.state.currentQuestion["id"]}</span>
              </div>
              <div className="question-text">
                {this.state.currentQuestion["question"]}
              </div>
            </div>
            <div className="answer-section">
              {this.state.currentQuestion["answerOptions"].map(
                (answerOption) => (
                  <button onClick={() => this.handleAnswer(answerOption)}>
                    {answerOption.answerText}
                  </button>
                )
              )}
            </div>
          </div>
        )}
        <audio
          id="audio-notification"
          controls
          playsInline
          src="https://www.redringtones.com/wp-content/uploads/2018/06/iphone-ding-sound.mp3"
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </div>
    );
  }
}
