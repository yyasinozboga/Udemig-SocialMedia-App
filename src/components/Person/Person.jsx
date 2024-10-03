import "./person.css";

const Person = ({ user, active }) => {
  return (
    <div className="person flex">
      <figure className="person-img">
        <img src={user.profilePicture} alt={user.username} />
      </figure>

      <div>
        <span>{user.username}</span>
        {active && <h4 className="active-title">Active</h4>}
      </div>
    </div>
  );
};

export default Person;
