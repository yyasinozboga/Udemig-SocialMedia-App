import SideBar from "../../components/SideBar/SideBar";
import Share from "../Home/Share";
import PersonInfo from "./PersonInfo/PersonInfo";
import Profile from "./Profile/Profile";
import Header from "../../components/Header/Header";

const Detail = () => {
  return (
    <>
      <Header />
      <main className="home flex">
        <SideBar />
        <div className="profile-container flex flex-column">
          <Profile />
          <div className="profile-bottom flex">
            <Share />
            <PersonInfo />
          </div>
        </div>
      </main>
    </>
  );
};

export default Detail;
