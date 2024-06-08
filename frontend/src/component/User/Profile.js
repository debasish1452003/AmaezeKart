import React, { Fragment, useEffect } from "react";
import MetaData from "../layout/MetaData";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../layout/Loader/Loader";
import "./Profile.css";

const Profile = () => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login", { replace: true });
    }
  }, [navigate, isAuthenticated]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          {user ? (
            <MetaData title={`${user.name}'s Profile`} />
          ) : (
            navigate("/login")
          )}

          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              {user ? (
                <img src={user.avatar.url} alt="profile_photo" />
              ) : (
                navigate("/login")
              )}

              <Link to="/me/update">Edit Profile</Link>
            </div>
            {/* </div> */}
            <div>
              <div>
                <h4>Full Name</h4>
                {user ? <p>{user.name}</p> : navigate("/login")}
              </div>
              <div>
                <h4>Email</h4>
                {user ? <p>{user.email}</p> : navigate("/login")}
              </div>
              <div>
                <h4>Joined On</h4>
                {user ? (
                  <p>{String(user.createdAt).substring(0, 10)}</p>
                ) : (
                  navigate("/login")
                )}
              </div>
              <div>
                <Link to="/order">My Orders</Link>
                <Link to="/password/update">Change Password</Link>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
