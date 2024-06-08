import "./App.css";
import Header from "./component/layout/Header/Heander";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import WebFont from "webfontloader";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./component/layout/Footer/Foonter";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";

import LoginSignUp from "./component/User/LoginSignUp.js";
import store from "./store";
import { loadUser } from "./actions/userAction.js";
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./component/User/Profile.js";
import ProtectedRoute from "./component/Route/ProtectedRoute.js";
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import Payment from "./component/Cart/Payment.js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess.js";
import MyOrders from "./component/Order/MyOrders.js";
import OrderDetails from "./component/Order/OrderDetails.js";
import Dashboard from "./component/admin/Dashboard.js";
import ProductList from "./component/admin/ProductList.js";
import NewProduct from "./component/admin/NewProduct.js";
import UpdateProduct from "./component/admin/UpdateProduct.js";
import OrderList from "./component/admin/OrderList.js";
import ProcessOrder from "./component/admin/ProcessOrder.js";
import UsersList from "./component/admin/UsersList.js";
import UpdateUser from "./component/admin/UpdateUser.js";
import ProductReviews from "./component/admin/ProductReviews.js";
import Contact from "./component/layout/Contact/Contact.js";
import About from "./component/layout/About/About.js";
import NotFound from "./component/layout/Not Found/NotFound.js";

function App() {
  const { isAuthenticated, user, loading } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    try {
      const { data } = await axios.get("/api/v1/stripeapikey");

      console.log("key received");

      setStripeApiKey(data.stripeApiKey);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  useEffect(() => {
    if (stripeApiKey) {
      const stripePromise = loadStripe(stripeApiKey);
    }
  }, [stripeApiKey]);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sanns", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  // window.addEventListener("contextmenu", (e) => e.preventDefault());

  // const [stripePromise, setStripePromise] = useState(null);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   WebFont.load({
  //     google: {
  //       families: ["Roboto", "Droid Sans", "Chilanka"],
  //     },
  //   });

  //   dispatch(loadUser());

  //   const getStripeApiKey = async () => {
  //     try {
  //       const { data } = await axios.get("/api/v1/stripeapikey");
  //       console.log("Stripe API Key received:", data.stripeApiKey); // Debugging log
  //       setStripeApiKey(data.stripeApiKey);
  //     } catch (error) {
  //       console.error(
  //         "An error occurred while fetching the Stripe API key:",
  //         error
  //       );
  //     }
  //   };

  //   getStripeApiKey();
  // }, [dispatch]);

  // useEffect(() => {
  //   if (stripeApiKey) {
  //     console.log("Initializing Stripe with key:", stripeApiKey); // Debugging log
  //     setStripePromise(loadStripe(stripeApiKey));
  //   }
  // }, [stripeApiKey]);

  // if (!stripePromise) {
  //   return <div>Loading...</div>; // Display a loading state while the Stripe key is being fetched
  // }

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}

      <ProtectedRoute exact path="/account" Component={Profile} />
      <ProtectedRoute exact path="/me/update" Component={UpdateProfile} />
      <ProtectedRoute
        exact
        path="/password/update"
        Component={UpdatePassword}
      />
      <ProtectedRoute exact path="/shipping" Component={Shipping} />

      <Elements stripe={loadStripe(stripeApiKey)}>
        <ProtectedRoute exact path="/process/payment" Component={Payment} />
      </Elements>
      <ProtectedRoute exact path="/success" Component={OrderSuccess} />
      <ProtectedRoute exact path="/orders" Component={MyOrders} />

      {!loading && (
        <Routes>
          {isAuthenticated === false ? (
            <Route path="*" element={<Navigate to="/login" />} />
          ) : (
            <>
              <Route exact path="/order/:id" Component={OrderDetails} />
              <Route exact path="/order/confirm" Component={ConfirmOrder} />
            </>
          )}
        </Routes>
      )}

      {/* Admin Routes */}
      <ProtectedRoute
        isAdmin={true}
        exact
        path="/admin/dashboard"
        Component={Dashboard}
      />
      <ProtectedRoute
        isAdmin={true}
        exact
        path="/admin/products"
        Component={ProductList}
      />
      <ProtectedRoute
        isAdmin={true}
        exact
        path="/admin/product"
        Component={NewProduct}
      />
      <ProtectedRoute
        isAdmin={true}
        exact
        path="/admin/product/:id"
        Component={UpdateProduct}
      />
      <ProtectedRoute
        isAdmin={true}
        exact
        path="/admin/orders"
        Component={OrderList}
      />
      <ProtectedRoute
        isAdmin={true}
        exact
        path="/admin/order/:id"
        Component={ProcessOrder}
      />
      <ProtectedRoute
        isAdmin={true}
        exact
        path="/admin/users"
        Component={UsersList}
      />
      <ProtectedRoute
        isAdmin={true}
        exact
        path="/admin/user/:id"
        Component={UpdateUser}
      />
      <ProtectedRoute
        isAdmin={true}
        exact
        path="/admin/reviews"
        Component={ProductReviews}
      />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" Component={ProductDetails} />
        <Route exact path="/products" Component={Products} />
        <Route path="/products/:keyword" Component={Products} />
        <Route exact path="/search" Component={Search} />
        <Route exact path="/login" Component={LoginSignUp} />
        <Route exact path="/password/forgot" Component={ForgotPassword} />
        <Route exact path="/password/reset/:token" Component={ResetPassword} />
        <Route exact path="/cart" Component={Cart} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/about" Component={About} />
        {/* <Route
          Component={
            window.location.pathname === "/process/payment" ? null : NotFound
          }
        /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

// Time: 6:47
