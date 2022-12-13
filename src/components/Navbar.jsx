import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export default function Navbar(props) {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {}
  };

  return (
    <div className=" w-full absolute p-4 text-white z-20 ">
      <nav className=" w-full flex justify-between items-center text-[12px] sm:text-sm">
        <Link to="/home">
          <h1 className=" text-red-700 text-2xl uppercase font-bold cursor-pointer ">
            flixff
          </h1>
        </Link>

        {user?.email ? (
          <div className=" flex ">
            <Link to="/account">
              <button className={` py-3 sm:px-5 rounded-sm mr-5 sm:border ${props.dispNone}`}>Account</button>
            </Link>

            <button
              className=" bg-red-500 py-3 px-5 rounded-sm mr-3"
              onClick={handleLogOut}
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className={` flex ${props.dispNone}`}>
            <Link to="signin">
              <button className=" py-2 px-6 bg-red-700 rounded-sm mr-5">
                Sign In
              </button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
