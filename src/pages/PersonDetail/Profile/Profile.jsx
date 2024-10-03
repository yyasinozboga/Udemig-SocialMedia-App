import "./profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-info flex flex-column">
        <figure className="person-img">
          <img src="/assets/person/1.jpeg" />
        </figure>
        <div>
          <h2>Safak Kocaoglu</h2>
          <p>Hello my friends!</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
