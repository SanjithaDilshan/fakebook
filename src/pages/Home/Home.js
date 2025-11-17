import React from "react";
import LeftPane from "../../components/LeftPane/LeftPane.js";
import NavBar from "../../components/Navigation/NavBar.js";
import PostPane from "../../components/PostPane/PostPane.js";
import RightPane from "../../components/RightPane/RightPane.js";
import "./home.css";

export default function Home() {
  return (
    <div>
      <NavBar />

      <div className="bottomContainer">
        <LeftPane />
        <PostPane />
        <RightPane />
      </div>
    </div>
  );
}
