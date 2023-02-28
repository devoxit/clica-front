import { useState, useEffect } from "react";
import ListComments from "../Comments/ListComments";
import { formatDistanceToNow } from "date-fns";
import axios from "axios";

const Post = ({ post }) => {
  const [comments, setComments] = useState([]);
  
console.log(post)
  const handleGetComments = async () => {
    try {
      const response = await axios.post(
        "http://15.152.60.125:4500/api/v1/relation/comment/of/post",
        { id: post._id }
      );
      setComments(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="mb-5">
        <div className="card mb-4 overflow-hidden">
          <div className="card-body">
            <div className="d-flex align-items-center mb-3">
              <div className="avatar avatar-xl status-online me-2">
                <img
                  className="rounded-circle border border-2 border-white"
                  //   src="../../assets/img/team/9.png"
                  src={""}
                  alt="user"
                />
              </div>
              <div className="flex-1">
                <a
                  className="fw-bold mb-0 text-decoration-none text-black"
                  href="#!"
                >
                  Erza Bridgest
                </a>
                <p className="fs--2 mb-0 text-600 fw-semi-bold">
                {formatDistanceToNow(new Date(post.latest.updatedAt), {
                  addSuffix: true,
                })}
                  
                  <span
                    className="fa-solid fa-circle text-300"
                    data-fa-transform="shrink-10 down-2"
                  ></span>
                  <br />
                  {post.latest.area[0]}
                  {/* city, state */}
                  {/* <span
                    className="fa-solid fa-circle text-300"
                    data-fa-transform="shrink-10 down-2"
                  ></span> */}
                  <span className="fa-solid fa-earth-americas text-900"></span>
                </p>
              </div>
              <div className="btn-reveal-trigger">
                <button
                  className="btn btn-sm btn dropdown-toggle dropdown-caret-none transition-none btn-reveal"
                  type="button"
                  data-bs-toggle="dropdown"
                  data-boundary="window"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-bs-reference="parent"
                >
                  <span className="fas fa-ellipsis-h"></span>
                </button>
                <div className="dropdown-menu dropdown-menu-end py-2">
                  <a className="dropdown-item" href="#!">
                    Edit
                  </a>
                  <a className="dropdown-item text-danger" href="#!">
                    Delete
                  </a>
                  <a className="dropdown-item" href="#!">
                    Download
                  </a>
                  <a className="dropdown-item" href="#!">
                    Report abuse
                  </a>
                </div>
              </div>
            </div>
            <p className="text-800">
              {/* Melancholy is sadness that has taken on lightness. */}
              {post.latest.content}
            </p>
            <div className="row g-1 mb-5 border-bottom pb-4">
              <div className="col-3">
                <a
                  href="../../assets/img/gallery/22.png"
                  data-gallery="gallery-posts-0"
                >
                  <img
                    className="rounded h-100 w-100"
                    src="../../assets/img/gallery/22.png"
                    alt="..."
                  />
                </a>
              </div>
              <div className="col-3">
                <a
                  href="../../assets/img/gallery/23.png"
                  data-gallery="gallery-posts-0"
                >
                  <img
                    className="rounded h-100 w-100"
                    src="../../assets/img/gallery/23.png"
                    alt="..."
                  />
                </a>
              </div>
              <div className="col-6">
                <a
                  href="../../assets/img/gallery/24.png"
                  data-gallery="gallery-posts-0"
                >
                  <img
                    className="rounded h-100 w-100"
                    src="../../assets/img/gallery/24.png"
                    alt="..."
                  />
                </a>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <button
                className="btn btn-link p-0 me-3 fs--2 fw-bolder"
                type="button"
              >
                <span className="fa-solid fa-heart me-1"></span>
                {post.reactions > 0 ? post.reactions : ""} Likes
              </button>
              <button
                className="btn btn-link text-900 p-0 fs--2 me-3 fw-bolder "
                type="button"
                onClick={handleGetComments}
              >
                <span className="fa-solid fa-comment me-1"></span>
                {comments ? comments.length : null} Comments
              </button>
              {/* <button
                className="btn btn-link text-900 p-0 fs--2 me-2 fw-bolder"
                type="button"
              >
                <span className="fa-solid fa-share me-1"></span>56 shares
              </button> */}
            </div>
          </div>

          <ListComments comments={comments} />
        </div>
      </div>
    </>
  );
};

export default Post;
