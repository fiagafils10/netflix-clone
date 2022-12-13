import React from 'react'
import { Link } from "react-router-dom";
import { MdCheck } from "react-icons/md";

import Navbar from '../components/Navbar';


export default function SignUpTwo() {
  return (
    <>
    <div>
    <Navbar dispNone = {'hidden'}/>
      <div className=" w-full h-[80vh] flex justify-center items-center bg-white ">
        <div className="flex flex-col gap-3 h-1/2 w-[300px] sm:w-[400px]  ">
          <div className="w-full flex justify-center">
            <img
              className="object-cover"
              src={
                  "https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png"
                }
              alt=""
            />
          </div>
          <div className=" w-full flex flex-col  items-center gap-2">
                <span >Account Created</span>
            <h2 className=" font-bold text-2xl text-center "> Choose your plan.</h2>
            <div className=' flex flex-col items-start '>
            <p className=" text-start whitespace-nowrap font-medium text-xl flex items-center justify-start gap-1">
                <MdCheck className="text-red-500"/>
                No commitments, cancel anytime.
            </p>
            <p className=" text-start whitespace-nowrap font-medium text-xl flex items-center justify-center gap-1">
                <MdCheck className="text-red-500"/>
                Everything for one low price.
            </p>
            <p className=" text-start whitespace-nowrap font-medium text-xl flex items-center justify-start gap-1">
                <MdCheck className="text-red-500"/>
                No ads and no extra fees. Ever.
            </p>
            </div>

          <Link to='/signupthree' >
          <button className="bg-red-600 w-[300px] py-4 text-xl  rounded  text-white hover:bg-red-600/70"
            
            >Next</button>
          </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#f1f1f1] h-[20vh] flex justify-center items-center text-grey-600">
              All Right Reserved
      </div>
    </div>

    
    </>
  )
}
