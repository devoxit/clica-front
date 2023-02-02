import { useState, useEffect } from "react";

const InputComment = ({image}) => {
    
  return (
    <>
      <div className="d-flex align-items-center ps-3">
        <div className="avatar avatar-m me-3">
          <img
            className="rounded-circle"
            src={image}
            // src="../../assets/img/team/9.png"
            alt="alt"
          />
        </div>
        <div className="flex-1">
          <input className="form-control" type="text" placeholder="Add comment" />
        </div>
      </div>
    </>
  );
};

export default InputComment;
