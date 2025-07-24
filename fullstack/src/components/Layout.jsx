import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

const Layout = ({ tasks, onAddTask }) => (
  <div className="d-flex">
    <SideBar onAddTask={onAddTask} />
    <div className="main-content flex-grow-1">
      <NavBar onAddTask={onAddTask} tasks={tasks} />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  </div>
);

export default Layout;
