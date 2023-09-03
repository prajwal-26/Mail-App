import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import mailer from "./Images/mailer.png";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
function Header() {
  const user = useSelector(selectUser);
   const dispatch = useDispatch();
  const signOut = () => {
auth.signOut().then(() => {
  dispatch(logout())
})

  }
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src={mailer} alt="mailer" />
      </div>
      <div className="header_middle">
        <SearchIcon className="search_icon" />
        <input placeholder="Search" type="text" />
        <ArrowDropDownIcon className="header_inputCaret" />
      </div>
      <div className="header_right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <AccountCircleIcon src={user?.photoUrl} onClick={signOut}/>
      </div>
    </div>
  );
}

export default Header;
