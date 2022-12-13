import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { UserAuth } from "../context/AuthContext";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.code.slice(5));
    }
  };

  const [opacity, setOpacity] = useState(false);
  const showOpacity = () => {
    setOpacity(!opacity);
  };

  return (

    <>
    <Navbar dispNone ={'hidden'}/>
      <div className="relative h-[100vh] w-full flex justify-center items-center bg-black/70 sm:bg-none">
        <img
          className=" h-full w-full object-cover sm:block absolute hidden "
          src="
                https://assets.nflxext.com/ffe/siteui/vlv3/271ac55e-7228-438e-824e-92db37981e59/f8d06248-42f0-4bc7-9f41-0cc8424c6e90/CM-en-20220627-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className="absolute h-full w-full bg-black/70 top-0"></div>

        <div className=" bg-black w-5/6 z-10 text-white flex flex-col items-center sm:w-[400px] sm:bg-black/70 h-auto py-2 sm:py-4 border border-white/60 sm:border-none">
          <span className="text-2xl font-extrabold capitalize text-center my-4">
            sign in
          </span>
          <span className=" text-2xl font-bold text-red-500 capitalize"> {error} </span>

          <form
            className=" w-full flex flex-col items-center"
            onSubmit={handleSubmit}
          >
            <div className=" w-full flex flex-col items-center gap-10 mt-10 ">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="w-3/4 h-12 p-5 border  outline-none rounded-md bg-transparent"
                placeholder="email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="w-3/4 h-12 p-5  border  outline-none rounded-md bg-transparent"
                placeholder="Password"
              />
              <button className="w-3/4 h-12   outline-none border-transparent rounded-md bg-red-600 my-0 mx-auto text-xl font-bold transition-all duration-300 hover:bg-transparent  hover:border  hover:border-red-600 ">
                Connexion
              </button>
            </div>
            <div className="w-3/4 flex justify-between items-center mt-5 ">
              <div className="flex  gap-1 items-center">
                <input
                  type="checkbox"
                  onClick={showOpacity}
                  name=""
                  id="remember"
                  className="accent-red-500"
                />
                <label
                  htmlFor="remember"
                  className={
                    opacity ? "opacity-100 text-red-500" : "opacity-60"
                  }
                >
                  Remember Me
                </label>
              </div>
              <div>
                <span>Need Help</span>
              </div>
            </div>
            <div className=" self-center w-3/4 mt-2">
              <p>
                New to Netflix ?
                <button>
                  <span className=" font-bold text-red-500 mx-1">Sign Up </span>
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
