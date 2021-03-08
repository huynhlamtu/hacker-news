import React from "react";
import "../styles/hackerStories.css";
import { Link } from "react-router-dom";

const HackerStory = ({ story }) => {
  return (
    <div className="news-wrapper">
      <div className="my-2 mx-5 p-2 news-section">
        <h5>
          <Link to={`/stories/${story._id}`}>{story.title}</Link>
        </h5>
        <div className="details">
          <span>
            <a href="/">{story.points} points</a>
          </span>
          <span className="mx-2 details-separate">|</span>
          <a href="/">{story.author}</a>
          <span className="mx-2 details-separate">|</span>
          <a href="/">{story.relativeTime}</a>
          <span className="mx-2 details-separate">|</span>
          <a href="/">{story.comments.length} comments</a>
          <span className="mx-2 details-separate">|</span>
          <a href="/">({story.link})</a>
        </div>
      </div>
    </div>
  );
};

export default HackerStory;
