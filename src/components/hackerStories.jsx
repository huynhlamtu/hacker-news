import React, { Component } from "react";
import HackerStory from "./hackerStory";

const HackerStories = ({ stories }) => {
  if (stories.length === 0) {
    return (
      <div
        key="noStories"
        className="container my-4 d-flex justify-content-between align-items-center"
      >
        <h1>There are no stories filtered</h1>
      </div>
    );
  }
  return (
    <div key="story" className="stories-container">
      {stories.map((story) => (
        <HackerStory story={story} />
      ))}
    </div>
  );
};

export default HackerStories;
