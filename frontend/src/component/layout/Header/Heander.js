import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/Logo.png";
import { FaUserAlt } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <ReactNavbar
      logo={logo}
      burgerColorHover="#eb4034"
      logoWidth="20vmax"
      navColor1="white"
      logoHoverSize="10px"
      logoHoverColor="#eb4034"
      link1Text="Home"
      link2Text="Products"
      link3Text="Contact"
      link4Text="About"
      link1Url="/"
      link2Url="/products"
      link3Url="/contact"
      link4Url="/about"
      link1Size="1.3vmax"
      link1Color="rgba(35, 35, 35,0.8)"
      nav1justifyContent="flex-end"
      nav2justifyContent="flex-end"
      nav3justifyContent="flex-start"
      nav4justifyContent="flex-start"
      link1ColorHover="#eb4034"
      link1Margin="1vmax"
      profileIcon={true}
      ProfileIconElement={FaUserAlt}
      searchIcon={true}
      SearchIconElement={IoSearchOutline}
      cartIcon={true}
      CartIconElement={FaCartShopping}
      cartIconSize="2vmax"
      profileIconSize="2vmax"
      searchIconSize="2vmax"
      profileIconUrl="/login"
      profileIconColor="rgba(35, 35, 35,0.8)"
      searchIconColor="rgba(35, 35, 35,0.8)"
      cartIconColor="rgba(35, 35, 35,0.8)"
      profileIconColorHover="#eb4034"
      searchIconColorHover="#eb4034"
      cartIconColorHover="#eb4034"
      cartIconMargin="3vmax"
    />
  );
};

export default Header;
