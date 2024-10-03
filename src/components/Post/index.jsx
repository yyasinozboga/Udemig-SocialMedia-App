import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post-top flex">
        <div className="flex">
          <figure className="person-img">
            <img src="/assets/person/1.jpeg" />
          </figure>

          <span>Safak Kocaoglu</span>
          <span>{post.date}</span>
        </div>
        <button>
          <MoreVertIcon />
        </button>
      </div>
      <div className="post-main flex flex-column">
        <p>{post.desc}</p>
        <img src={post.photo} />
      </div>
      <div className="post-footer flex">
        <div className="flex">
          <button>
            <img src="/assets/like.png" />
          </button>
          <button>
            <img src="/assets/heart.png" />
          </button>
          <span>{post.like} people like it</span>
        </div>
        <span>{post.comment} comments</span>
      </div>
    </div>
  );
};

export default Post;
