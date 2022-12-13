import React from "react";
import { MdCheck, MdOutlineComputer, MdPhoneIphone, MdTabletAndroid, MdTv } from "react-icons/md";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function SignUpThree() {


  return (
    <>
      <Navbar dispNone={"hidden"} />

      <div className="h-auto overflow-hidden w-full bg-white flex flex-col pt-28 pb-8">
        <div className=" h-[25%] flex flex-col justify-center p-4 max-w-lg lg:self-center">
          <h1 className=" text-3xl capitalize font-extrabold mb-2">
            {" "}
            Choose the plan that's right for you{" "}
          </h1>
          <div className=" flex flex-col items-start ">
            <p className=" text-start whitespace-nowrap font-medium text-xl flex items-center justify-start gap-1">
              <MdCheck className="text-red-500" />
              No commitments, cancel anytime.
            </p>
            <p className=" text-start whitespace-nowrap font-medium text-xl flex items-center justify-center gap-1">
              <MdCheck className="text-red-500" />
              Everything for one low price.
            </p>
            <p className=" text-start whitespace-nowrap font-medium text-xl flex items-center justify-start gap-1">
              <MdCheck className="text-red-500" />
              No ads and no extra fees. Ever.
            </p>
          </div>
        </div>

        <div className="mx-6 flex justify-center self-center mt-10 bg-black/90 max-w-lg p-4 h-[500px] rounded-md text-white">
          <div className="flex flex-col items-start gap-5">
              <h1 className=" text-4xl self-center "> Unique price</h1>
            <span className="text-3xl font-semibold self-center text-red-600 mb-8"> $11.00/<span className="text-sm text-white">Month</span></span>
            <span className=" text-xl font-bold"> Video Quality: <span className="text-red-600">Awesome</span></span>

            <span className=" text-xl font-bold"> Max Resolution :<span className="text-red-600"> 4k + HDR</span></span>

          <div className="flex items-center gap-2 ">
          <span className="text-xl font-bold"> Devices you can use to watch:</span>
        <div className=" flex text-3xl text-red-600 ">
        <MdPhoneIphone />
          <MdTabletAndroid />
          <MdOutlineComputer />
          <MdTv />
        </div>
          </div>
            <Link to='/home' className="w-full">
            <button className=" px-6 py-4 bg-red-500 w-full rounded text-white font-bold border border-transparent  hover:bg-transparent hover:border-white hover:text-red-500"> Subscribe</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
