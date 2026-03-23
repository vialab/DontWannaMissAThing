import React from "react";
import { Link } from "react-router-dom";
import Links from "../constants/routes.json";

const NextPage = (props) => {
  // console.log("NextPage:", Window.links);
  let idx;
  let currentHref = window.location.href;
  if (currentHref === "http://localhost:8080/index.html") {
    idx = 1;
  } else {
    idx = Window.links.indexOf(window.location.href.split("#")[1]) + 1;
  }
  // id="nextButton" disabled={true} type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gray-500 hover:bg-gray-500 hover:shadow-lg cursor-not-allowed"
  return (
    <div className="next-arrow">
      <Link to={Window.links[idx]}>
        <button
          id="nextButton"
          type="button"
          className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-green-700 hover:bg-green-900 hover:shadow-lg"
        >
          Next
        </button>
      </Link>
    </div>
  );
};

export default NextPage;