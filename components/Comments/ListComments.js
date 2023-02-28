import { useState, useEffect } from "react";
import Comment from "./Comment";

const ListComments = ({ comments }) => {
  return (
    <>
      {comments
        ? comments.map((comment) => (
            <Comment
              key={comment._id}
              comment={comment}
              image=""
            />
          ))
        : null}
    </>
  );
};

export default ListComments;
