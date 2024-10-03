import "./user.css";

const User = ({ user, name }) => {
  return (
    <div className="flex flex-column">
      <figure className="user-img">
        <img src={user.profilePicture} />
      </figure>
      <span>{name}</span>
    </div>
  );
};

export default User;
