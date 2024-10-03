import "./sidebar.css";
import { categories } from "../../helpers/constant";
import { Users } from "../../dummyData";
import Person from "../Person/Person";

const SideBar = () => {
  return (
    <aside className="sidebar flex flex-column">
      {categories.map((category, key) => (
        <div key={key} className="category flex">
          <span className="category-icon">{category.icon}</span>
          <span className="category-name">{category.name}</span>
        </div>
      ))}
      <button className="sidebar-btn">Show More</button>
      <hr className="sidebar-hr" />
      <div className="close-friends flex flex-column">
        {Users.map((user) => (
          <Person key={user.id} user={user} />
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
