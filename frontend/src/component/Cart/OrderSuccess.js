import React, { Fragment } from "react";
import "./OrderSuccess.css";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Loader from "../layout/Loader/Loader";
import { useSelector } from "react-redux";

const OrderSuccess = () => {
  const { loading } = useSelector((state) => state.newOrder);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className="orderSuccess">
          <CheckCircleIcon />

          <Typography>Your Order has been Placed Successfully</Typography>
          <Link to="/orders">View Orders</Link>
        </div>
      )}
    </Fragment>
  );
};

export default OrderSuccess;
