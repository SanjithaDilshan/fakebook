import React from "react";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <div className="postContainer">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="/images/2.jpeg" alt="" className="postImage" />
            <span className="postUserName">James William</span>
            <span className="postTime">5 mins ago</span>
          </div>
        </div>
        <div className="postCenter">
          <div className="postCaptipn">
            Hellow I am Batman...! You Understand...? I am batman...!!!
          </div>
          <img src="/images/3.jpg" alt="" className="postedImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomleft">
            <img src="/images/like.png" alt="" className="reactionPic" />
            <img src="/images/heart.png" alt="" className="reactionPic" />
            <img src="/images/haha.png" alt="" className="reactionPic" />
            <span className="likeCount">Batman and 255 others</span>
          </div>

          <div className="postBottomRight">
            <span className="commentCount">15 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
