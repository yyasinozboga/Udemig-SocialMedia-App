import "./rightbar.css";
import { Users } from "../../dummyData";
import Person from "../Person/Person";

const RightBar = () => {
  return (
    <aside className="rightbar flex flex-column">
      <div className="rightbar-top">
        <div className="birthday flex">
          <figure className="gift-img">
            <img src="/assets/gift.png" />
          </figure>
          <p>
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
          </p>
        </div>
        <img src="/assets/ad.png" className="ad-img" />
      </div>
      <h2>Online Friends</h2>
      <div className="close-friends flex flex-column">
        {Users.map((user) => (
          <Person key={user.id} user={user} active />
        ))}
      </div>
    </aside>
  );
};

export default RightBar;
