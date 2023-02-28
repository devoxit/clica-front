import { useState } from 'react';

const PostModal = ({ post, onClose }) => {
  const [comment, setComment] = useState('');
  const [likes, setLikes] = useState(post.likes);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Send comment to server and add to post comments
    setComment('');
  };

  const handleLike = () => {
    // Send like to server and update post likes
    setLikes(likes + 1);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{post.title}</h2>
          <button onClick={onClose}>X</button>
        </div>
        <div className="modal-body">
          <p>{post.body}</p>
          <div className="likes-section">
            <button onClick={handleLike}>
              {likes} {likes === 1 ? 'Like' : 'Likes'}
            </button>
          </div>
          <div className="comments-section">
            <h3>Comments</h3>
            <ul>
              {post.comments.map((comment) => (
                <li key={comment.id}>
                  <p>{comment.body}</p>
                  <span>{comment.author}</span>
                </li>
              ))}
            </ul>
            <form onSubmit={handleCommentSubmit}>
              <input
                type="text"
                placeholder="Write a comment..."
                value={comment}
                onChange={handleCommentChange}
              />
              <button type="submit">Comment</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
