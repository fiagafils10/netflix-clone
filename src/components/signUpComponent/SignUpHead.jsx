import React, { useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SignUpHead() {
  const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/signuptwo");
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <>
      <div className="relative h-[100vh] w-full flex justify-center items-center p-4 border-b-8 border-gray-800 sm:h-[100vh] md:h-[80vh] "
      onClick={()=> setError('')}
      >
        <img
          className=" h-full w-full object-cover absolute"
          src="
                https://assets.nflxext.com/ffe/siteui/vlv3/271ac55e-7228-438e-824e-92db37981e59/f8d06248-42f0-4bc7-9f41-0cc8424c6e90/CM-en-20220627-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="Background Illustration"
        />
        <div className="absolute h-full w-full bg-black/60 top-0"></div>

        <div className=" h-[60vh] w-full z-10 text-white flex flex-col justify-center items-center md:w-3/4 mt-8 sm:mt-auto ">
          <div className=" flex flex-col gap-4 justify-center items-center">
            <p className="text-3xl font-extrabold capitalize text-center break-words sm:text-4xl lg:text-5xl lg:w-4/5 2xl:text-6xl">
              Unlimited movies, TV shows, and more.
            </p>
            <p className=" text-lg text-center lg:text-2xl lg:font-medium">
              Watch anywhere. Cancel anytime
            </p>
            <p className=" text-lg text-center  w-3/4 lg:text-2xl lg:font-semibold ">
              Ready to watch ? Enter Your email to create or restart your
              membership
            </p>

            <form
              action=""
              className=" w-full flex flex-col items-center"
              onSubmit={handleSubmit}
            >
              <div className=" w-full flex flex-col items-center gap-2">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="w-3/4 h-12 p-5 border text-xl outline-none rounded-md bg-transparent lg:w-3/6"
                  placeholder="Email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="w-3/4 h-12 p-5  border  outline-none rounded-md bg-transparent lg:w-3/6"
                  placeholder="Password"
                />
                <button className="w-3/4 h-12   outline-none border-transparent rounded-md bg-red-600 my-0 mx-auto text-xl font-bold transition-all duration-300 hover:bg-transparent  hover:border  hover:border-red-600 lg:w-3/6 ">
                  Get Started
                </button>
              </div>
                <span className=" text-2xl font-bold text-red-500 capitalize text-center"> {error} </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

