import "./post.scss";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";
import Comments from "../comments/Comments";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const liked = false;

  return (
    <div className="post">
      <div className="conatiner">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span>{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizOutlinedIcon fontSize="small" />
        </div>
        <div className="content">
          <p className="desc"></p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? (
              <FavoriteOutlinedIcon fontSize="small" />
            ) : (
              <FavoriteBorderOutlinedIcon fontSize="small" />
            )}
            <span>12 Like</span>
          </div>
          <div
            className="item"
            onClick={() => {
              setCommentOpen(!commentOpen);
            }}
          >
            <TextsmsOutlinedIcon fontSize="small" />
            <span>Comments</span>
          </div>
          <div className="item">
            <ShareOutlinedIcon fontSize="small" />
            <span>Share</span>
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
