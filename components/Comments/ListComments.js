import { useState, useEffect } from "react";
import Comment from "./Comment";


const ListComments = ({ comments, image }) => {

  return (
    <>
      {comments ? comments.map((comment) => <Comment key={comment.id} comment={comment} image={image} />) : "Loading ..."}
    </>
  );
};

export default ListComments;
