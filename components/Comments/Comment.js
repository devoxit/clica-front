import { useState, useEffect } from "react";
import InputComment from "./InputComment";

import { formatDistanceToNow } from "date-fns";

const Comment = ({ comment, image }) => {
  const [user, setUser] = useState([]);

  return (
    <>
      <div className="bg-100 ps-2 pe-3 py-3 border-top">
        <div className="d-flex align-items-start ps-3">
          <div className="avatar avatar-m status-online me-3">
            <img
              className="rounded-circle"
              src={image}
              //   src="../../assets/img/team/30.png"
              alt="alt"
            />
          </div>
          <div className="flex-1">
            <div className="d-flex align-items-center">
              <a
                className="fw-bold mb-0 text-decoration-none text-black"
                href="#!"
              >
                Yassine Benzouine
              </a>
              <span className="text-600 fw-semi-bold fs--2 ms-2">
                {formatDistanceToNow(new Date(comment.updatedAt), {
                  addSuffix: true,
                })}
              
              </span>
            </div>
            <p className="mb-0">
              {/* How long did it take to create this? It appears that you quickly
              produced the second one. */}
              {comment.value.comment}
            </p>
            <button
              className="btn btn-link p-0 text-900 text-decoration-none fw-bolder mb-2"
              type="button"
            >
              <span className="fa-solid fa-reply fs--2 me-1"></span>
              <span className="d-inline-block fw-bold fs--2">Reply</span>
            </button>
            {/* <div className="d-flex align-items-start ps-3 mb-3">
              <div className="avatar avatar-m status-online me-3">
                <img
                  className="rounded-circle"
                  src={image}
                  //   src="../../assets/img/team/62.png"
                  alt="alt"
                />
              </div>
              <div className="flex-1">
                <div className="d-flex align-items-center">
                  <a
                    className="fw-bold mb-0 text-decoration-none text-black"
                    href="#!"
                  >
                    
                      Yassine Benzouine

                  </a>
                  <span className="text-600 fw-semi-bold fs--2 ms-2">
                    5 mins ago
                  </span>
                </div>
                <p className="mb-0">{comment}</p>
              </div>
            </div> */}
          </div>
        </div>
        <InputComment image={""} />
      </div>
    </>
  );
};

export default Comment;
