import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../assets/css/App.css'
import TopBar from './TopBar';
import BottomBar from './BottomBar';
import { Link } from 'react-router-dom';
import Links from '../constants/routes.json';
import { ipcRenderer } from 'electron';


function showNext() {
  let nextButton = document.getElementById("nextButton")
  nextButton.className ="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-green-700 hover:bg-green-900 hover:shadow-lg";
  nextButton.disabled = false;
}

function Start() {
  const pid = useSelector((state) => state.participantID || []);
  let cursor = "";
  // Update task order based on participantID - ex. 1234
  //let preStudy = ["/start", "/consent-form", "/prestudy"];
  let preStudy = ["/start", "/consent-form"];
  let postStudy = ["/end-of-study", "/exit"];
  let task1 = [
    "/task1-instructions",
    "/mobile-connect",
    "/task1",
    "/comp-question1",
    "/task1-post"
  ];
  let task2 = [
    "/task2-instructions",
    "/mobile-connect2",
    "/task2",
    "/comp-question2",
    "/task2-post"
  ];
  let task3 = [
    "/task3-instructions",
    "/mobile-connect3",
    "/task3",
    "/comp-question3",
    "/task3-post"
  ];
  let task4 = [
    "/task4-instructions",
    "/mobile-connect4",
    "/task4",
    "/comp-question4",
    "/task4-post"
  ];

  let tasks = [task1, task2, task3, task4]
  if (pid.length === 0) {
    console.log("No participant ID found, defaulting to 1234");
    pid[0] = 1;
    pid[1] = 2;
    pid[2] = 3;
    pid[3] = 4;
  }
  let taskOrder = preStudy.concat(tasks[pid[0]-1], tasks[pid[1]-1], tasks[pid[2]-1], tasks[pid[3]-1], postStudy)
  Window.links = taskOrder;

  useEffect(() => {
    // On functional component mount
    ipcRenderer.on('gaze-pos', (event, arg) => {
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
    }
  }, [])





  return (
    <div className="flex flex-col h-screen">
      <TopBar/>
      <div id="gazeCursor"></div>
      <div className="flex-grow bg-gray-100 flex items-center justify-center">
        <div className="px-10">
          <div className="flex flex-col items-center bg-white max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
            <div>
              <h1 className="text-2xl text-gray-700 font-semibold cursor-pointer">
                Gaze Aware Video Player
              </h1>
            </div>
            <br></br>
            <div className="inline-block mr-2 mt-2">
              <Link to={Links.CONSENT_FORM}>
                <button id="nextButton" type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gray-500 hover:bg-gray-500 hover:shadow-lg cursor-not-allowed">
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <BottomBar/>
    </div>
  )
}

export default Start
