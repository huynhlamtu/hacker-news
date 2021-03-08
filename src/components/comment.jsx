import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faArrowAltCircleDown,
} from "@fortawesome/free-regular-svg-icons";

const Comment = ({ parentComment, comments }) => {
  const childrenComments = comments.filter(
    (c) => c.parentComment === parentComment._id
  );

  return (
    <div className="comments mx-4 pb-3">
      <div>
        <div className="comment-details">
          <span className="mr-2">
            <FontAwesomeIcon
              style={{ cursor: "pointer" }}
              icon={faCommentDots}
            />
          </span>
          <span>
            {parentComment.author} at {parentComment.dayComment}
          </span>
        </div>
        <p className="comment-content ml-5">{parentComment.content}</p>
      </div>

      {childrenComments.map((c) => (
        <div className="ml-5">
          <div className="comment-details">
            <span className="mr-2">
              <FontAwesomeIcon
                style={{ cursor: "pointer" }}
                icon={faArrowAltCircleDown}
              />
            </span>
            <span>
              {c.author} at {c.dayComment}
            </span>
          </div>
          <p className="comment-content">{c.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Comment;
