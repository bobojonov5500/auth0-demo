import React from "react";
import LoginButton from "./auth/login";
import LogoutButton from "./auth/logout";
import Profile from "./auth/profile";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  return (
    <div className="bg-green-500 sticky top-0 z-10">
      <div
        className="max-w-screen-xl mx-auto py-2 px-3"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Link to={"/"}>
            <Profile />
          </Link>
        </div>
        <div className="flex gap-3">
          {isAuthenticated && (
            <button
              onClick={() => navigate("/create-post")}
              className="bg-indigo-500 rounded-md py-1 px-2 text-white active:text-black"
            >
              Create post
            </button>
          )}
          {!isAuthenticated && <LoginButton />}
          {isAuthenticated && <LogoutButton />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
