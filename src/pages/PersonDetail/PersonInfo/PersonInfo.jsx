import "./personInfo.css";
import { Users } from "../../../dummyData";
import User from "../User/User";

const PersonInfo = () => {
  return (
    <aside className="person-info flex flex-column">
      <div className="info-top flex flex-column">
        <h3>User Information</h3>
        <div className="flex">
          <b>City:</b>
          <span>New York</span>
        </div>
        <div className="flex">
          <b>From:</b>
          <span>Madrid</span>
        </div>
        <div className="flex">
          <b>Relationship:</b>
          <span>Single</span>
        </div>
      </div>
      <div className="user-friends flex">
        {Users.map((user) => (
          <User key={user.id} user={user} name="John Carter" />
        ))}
      </div>
    </aside>
  );
};

export default PersonInfo;
