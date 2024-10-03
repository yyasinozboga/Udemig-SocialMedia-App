import "./home.css";
import SideBar from "../../components/SideBar/SideBar";
import Share from "./Share";
import RightBar from "../../components/RightBar/RightBar";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="home flex">
        <SideBar />

        <Share />

        <RightBar />
      </main>
    </>
  );
};

export default Home;
