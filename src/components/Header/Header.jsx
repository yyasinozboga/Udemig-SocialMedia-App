import "./header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = () => {
  return (
    <header className="header flex">
      <h1 className="logo">
        <Link to={"/Feed"}>Social</Link>
      </h1>

      <div className="header-right flex">
        <form className="form flex">
          <button className="form-btn">
            <SearchIcon />
          </button>
          <input
            type="text"
            placeholder="Search for friend, post or video"
            className="form-input"
          />
        </form>

        <div className="flex navbar">
          <div className="flex">
            <span>Homepage</span>
            <span>Timeline</span>
          </div>

          <div className="notifications flex">
            <div data-count="1">
              <PersonIcon />
            </div>
            <div data-count="2">
              <MessageIcon />
            </div>
            <div data-count="1">
              <NotificationsIcon />
            </div>
          </div>

          <Link to={"/detail"}>
            <figure className="person-img">
              <img src="/assets/person/1.jpeg" alt="" />
            </figure>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
