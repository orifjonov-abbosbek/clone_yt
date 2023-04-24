import React from "react";
import moment from "moment";
import "./comment.scss";

const Comment = ({ comment }) => {
 
   const {authorDisplayName, authorProfileImageUrl, publishedAt, textDisplay} = comment


  return (
    <div className="comment p-2 d-flex">
      <img className="rounded-circle mr-3" src={authorProfileImageUrl} alt="" />

      <div className="comment__body">
        <p
          className="comment__header
          mb-1
            "
        >
          {authorDisplayName} • {moment(publishedAt).fromNow()}
        </p>
        <p>{textDisplay}</p>
      </div>
    </div>
  );
};

export default Comment;
