import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import "../assets/css/App.css";
// import "../assets/css/tailwind.css";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import { Link } from "react-router-dom";
import Links from "../constants/routes.json";
import { ipcRenderer } from "electron";
import NextPage from "./NextPage";
import { CHANGE_PARTICIPANT_ID } from "./../redux/types";

function showNext() {
  let nextButton = document.getElementById("nextButton");
  nextButton.className =
    "focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-green-700 hover:bg-green-900 hover:shadow-lg";
  nextButton.disabled = false;
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // On functional component mount
    ipcRenderer.on("gaze-pos", (event, arg) => {
      /*
      console.log("gaze-point: x ", arg.x, " y ", arg.y);
      // Gaze cursor
      if (cursor === '') {
        cursor = document.getElementById("gazeCursor");
      }
      cursor.style.visibility = "visible";

      // Update position
      cursor.style.left = arg.x + "px";
      cursor.style.top = arg.y + "px";
      */
      if (document.getElementById("nextButton").disabled === true) {
        showNext();
      }
    });

    return () => {
      // On functional component unmount
      ipcRenderer.removeAllListeners();
    };
  }, []);

  function submitHandler() {
    console.log("Submit handler");
    let pid = document.getElementById("input-participantID").value;
    dispatch({ type: CHANGE_PARTICIPANT_ID, payload: pid });
  }

  return (
    <div className="flex flex-col h-screen">
      <TopBar />
      <div id="gazeCursor"></div>
      <div className="flex-grow bg-gray-100 flex items-center justify-center">
        <div className="px-10">
          <div className="flex flex-col items-center bg-white max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
            <div>
              <h1 className="text-2xl text-gray-700 font-semibold cursor-pointer">
                Please enter the particiant ID
              </h1>
            </div>
            <br></br>
            <div className="mb-3 pt-0">
              <input
                id="input-participantID"
                type="text"
                placeholder="ParticipantID"
                className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              />
            </div>
            <br></br>
            <div className="inline-block mr-2 mt-2">
              <button
                onClick={submitHandler.bind(this)}
                className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-600 hover:bg-blue-800 hover:shadow-lg"
              >
                Update
              </button>
              <Link to={Links.START}>
              <button
                onClick={submitHandler.bind(this)}
                className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-green-600 hover:bg-green-800 hover:shadow-lg"
              >
                Submit
              </button>
            </Link>
            </div>
          </div>
        </div>
      </div>
      <BottomBar />
    </div>
  );
}

export default App;
