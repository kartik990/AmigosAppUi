import "./navBar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const NavBar = () => {
  const { darkMode, toggle } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Amigos</span>
        </Link>
        <HomeOutlinedIcon fontSize="small" />
        {darkMode ? (
          <WbSunnyOutlinedIcon
            fontSize="small"
            onClick={toggle}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <DarkModeOutlinedIcon
            fontSize="small"
            onClick={toggle}
            style={{ cursor: "pointer" }}
          />
        )}
        <GridViewOutlinedIcon fontSize="small" />
        <div className="search">
          <SearchOutlinedIcon fontSize="small" />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon fontSize="small" />
        <EmailOutlinedIcon fontSize="small" />
        <NotificationsOutlinedIcon fontSize="small" />
        <div className="user">
          <img src={currentUser.profilePic} alt="user" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
