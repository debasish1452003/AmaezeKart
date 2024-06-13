import React, { Fragment, useState } from "react";
import "./Header.css";
import { SpeedDial, SpeedDialAction } from "@mui/material";

import Backdrop from "@material-ui/core/Backdrop";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { logout } from "../../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";

const UserOptions = ({ user }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);
  const [activeItem, setActiveItem] = useState(null);

  const options = [
    { id: 1, icon: <ListAltIcon />, name: "Orders", func: orders },
    { id: 2, icon: <PersonIcon />, name: "Profile", func: account },
    {
      id: 3,
      icon: (
        <ShoppingCartIcon
          style={{
            color: cartItems.length > 0 ? "green" : "tomato",
          }}
        />
      ),
      name: `Cart(${cartItems.length})`,
      func: cart,
    },
    {
      id: 4,
      icon: <ExitToAppIcon style={{ color: "red" }} />,
      name: "Logout",
      func: logoutUser,
    },
  ];

  if (user.role === "admin") {
    options.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: dashboard,
    });
  }

  function dashboard() {
    navigate("/admin/dashboard");
  }

  function orders() {
    navigate("/orders");
  }
  function account() {
    navigate("/account");
  }

  function cart() {
    navigate("/cart");
  }

  function logoutUser() {
    dispatch(logout());
    navigate("/login");
    alert.success("Logout Succesfully");
  }

  const handleClick = (item) => {
    setActiveItem(item.id);
    item.func();
  };

  return (
    <Fragment>
      <Backdrop open={open} style={{ zIndex: "10" }} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        className="speedDial"
        style={{ zIndex: "11" }}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        direction="down"
        icon={
          <img
            className="speedDialIcon"
            src={user.avatar.url ? user.avatar.url : "/Profile.png"}
            alt="Profile"
          ></img>
        }
      >
        {options.map((item) => (
          <SpeedDialAction
            icon={item.icon}
            key={item.name}
            tooltipTitle={item.name}
            onClick={() => handleClick(item)}
            tooltipOpen={window.innerWidth <= 600 ? true : false}
            className={activeItem === item.id ? "active" : "link"}
          />
        ))}
      </SpeedDial>
    </Fragment>
  );
};

export default UserOptions;
