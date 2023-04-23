import React from "react";
import "./header.scss";
import Logo from "../../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";

const Header = ({ handleToggleSidebar }) => {
  return (
    <div className="border border-dark header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={()=> handleToggleSidebar()}
      />
      <img src={Logo} alt="" className="header__logo color-white" />
      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className="header__icons">
        <MdNotifications />
        <MdApps />
        <img src="" alt="avatar" />
      </div>
    </div>
  );
};

export default Header;
