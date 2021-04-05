import { Link } from "react-router-dom";
import SideMenuLink from "./SideMenuLink/SideMenuLink";

function SideMenu() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="/"
      >
        <div className="sidebar-brand-icon">
          <i className="fas fa-chart-line"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Level-Up Admin</div>
      </a>

      <hr className="sidebar-divider my-0" />

      <Link to="/">
        <SideMenuLink title="General Information" />
      </Link>

      <hr className="sidebar-divider" />

      <Link to="/products">
        <SideMenuLink title="Listed Products" />
      </Link>

      <Link to="/users">
        <SideMenuLink title="Registered Users" />
      </Link>

      <SideMenuLink title="More..." />
    </ul>
  );
}

export default SideMenu;
