import { useState, useEffect } from "react";
import Post from "./Post";
import { Http } from "@/webservice/http.module";
import axios from "axios";
import PostModal from '../PostModal';

const http = new Http("http://15.152.60.125:4500/api/v1/post", false);
const errors = [
  "Error sending phone number",
  "Error verifying phone number",
  "Error send email",
  "Error verifying email",
  "Error submitting data",
];

const ListPosts = () => {
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    fetchPostData();
  }, []);

  const fetchPostData = async () => {
    try {
      const response = await axios.post(
        `http://15.152.60.125:4500/api/v1/post/list`,
        {
          idKey: "postId",
          sort: { postedAt: -1 },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;

      setPostData(data.data);
      setLoading(false);
      setLoadingMore(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoadMore = () => {
    setLoadingMore(true);
    setSkip((prevSkip) => prevSkip + 3);
  };

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading &&
        postData.map((post) => (
          <Post key={post.latest.postId || post._id} post={post} />
        ))}

      {!loading && !loadingMore && (
        <div class="text-center">
          <a class="btn btn-link fs-0 p-0" as="button" onClick={handleLoadMore}>
            Load more
          </a>
        </div>
      )}
    </>
  );
};

export default ListPosts;
