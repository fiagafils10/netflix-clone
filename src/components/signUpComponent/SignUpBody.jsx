import React from 'react'

export default function SignUpBody(props) {
  return (
   
    <div className = {`px-4 py-8 flex flex-col gap-4 justify-center items-center text-white border-b-8 border-grey-600 m-y-8 ${props.customClassName} md:justify-evenly lg:justify-center`} >
      
    <div className=' flex flex-col max-w-md '>
    <p className="text-2xl font-extrabold capitalize text-center break-words md:text-4xl md:font-bold lg:text-4xl 2xl:text-5xl">
        {props.title}
        </p>
      
      <p className=" text-lg text-center lg:text-2xl ">
      {props.description}
    </p> 
    </div>

    <div className='w-full flex justify-center lg:w-1/3'>
          <img src={props.imgLink} 
          className= 'w-3/4 object-cover lg:w-full'
          alt="" />
      </div>
    </div>
   
    
    
   
  )
}
