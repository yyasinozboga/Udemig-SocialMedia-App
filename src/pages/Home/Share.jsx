import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
import Post from "../../components/Post";
import { Posts } from "../../dummyData";

const Share = () => {
  return (
    <div className="share flex flex-column">
      <div className="share-top">
        <div className="flex">
          <figure className="person-img">
            <img src="/assets/person/1.jpeg" />
          </figure>

          <input type="text" placeholder="What's in your mind Safak?" />
        </div>
        <hr className="share-hr" />
        <div className="share-options-container flex">
          <div className="share-options flex">
            <div className="flex">
              <PermMedia htmlColor="tomato" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="flex">
              <Label htmlColor="blue" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="flex">
              <Room htmlColor="green" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="flex">
              <EmojiEmotions htmlColor="goldenrod" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="share-btn">Share</button>
        </div>
      </div>

      {Posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Share;
