import React, { Component } from "react";
import Comment from "./comment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import "../styles/comments.css";

const Comments = ({ comments }) => {
  const parentComments = comments.filter((c) => !c.parentComment);

  return (
    <div className="comments-wrapper">
      {parentComments.map((c) => (
        <Comment parentComment={c} comments={comments} />
      ))}
    </div>
  );
};

export default Comments;
