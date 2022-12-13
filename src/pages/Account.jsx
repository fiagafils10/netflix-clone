import React from "react";
import Navbar from "../components/Navbar";
import SavedShows from "../components/SavedShows";

export default function Account() {
  return (
    <>
        <Navbar />
      <div className="w-full h-[60vh] bg-white text-white">
        <img
          src="
                https://assets.nflxext.com/ffe/siteui/vlv3/271ac55e-7228-438e-824e-92db37981e59/f8d06248-42f0-4bc7-9f41-0cc8424c6e90/CM-en-20220627-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
          className="object-cover w-full h-full"
        />
            <div className="absolute h-full w-full bg-black/60 top-0"></div>
            <div className="absolute top-[30%] left-11 text-white text-4xl font-extrabold">
                        My Shows
            </div>
      </div>
      <SavedShows />
    </>
  );
}
