import React, { useEffect, useState } from "react";
import Comment from "../comment/Comment";
import "./comments.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  getCommentsOfVideoById,
} from "../../redux/actions/comments.action";
const Comments = ({ videoId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsOfVideoById(videoId));
  }, [videoId, dispatch]);

  const comments = useSelector((state) => state.commentsList.comments);

  const _comment = comments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );

  const [text, setText] = useState("");

  const handleComment = (e) => {
    e.preventDefault();

    if (text.length === 0) return;
    dispatch(addComment(videoId, text));

    setText('')
  };

  return (
    <div className="comments">
      <p>1234 comments</p>

      <div className="comment__form d-flex w-100 my-2">
        <img
          className="rounded-circle mr-3"
          src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
          alt=""
        />

        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input
            className="flex-grow-1"
            type="text"
            placeholder="write a comment..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button className="border-0 p-2">Comment</button>
        </form>
      </div>

      <div className="comment__list">
        {_comment?.map((comment, i) => (
          <Comment comment={comment} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
