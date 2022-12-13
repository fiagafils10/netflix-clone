import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


import Movie from "./Movie";

export default function CategoryRow({ title, fetchURL, rowId }) {
  //FETCH THE MOVIES LINK

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

//SCROLL OPTION

const slideLeft = () => {
  document.getElementById("slider" + rowId).scrollLeft -= 300;

  if (document.getElementById("slider" + rowId).scrollLeft === 0) {
    document.getElementById("slider" + rowId).scrollLeft = 7243;
  }
};
const slideRight = () => {
  document.getElementById("slider" + rowId).scrollLeft += 300;
  console.log(  document.getElementById("slider" + rowId).scrollLeft);

  if (document.getElementById("slider" + rowId).scrollLeft >= 5800) {
    document.getElementById("slider" + rowId).scrollLeft = 0;
  }
};
  

  return (
    <div className="px-4">
  <h1 className="text-white my-4  text-xl font-bold "> {title}</h1>
<div className="h-[200px] w-full px-4 py-2 mb-10 flex items-center justify-center  group">
        <FaChevronLeft onClick={slideLeft} size={35} className=" bg-white cursor-pointer rounded-lg p-2 lg:invisible group-hover:visible" />
      <div id={"slider" + rowId } className='w-full h-full overflow-x-scroll overflow-hidden scroll-smooth whitespace-nowrap scrollbar-hide'>
        {movies.map((item, id) => (
          <Movie key={id} item={item} />
          ))}
      </div>
      <FaChevronRight onClick={slideRight} size={35} className=" bg-white cursor-pointer rounded-lg p-2 lg:hidden group-hover:block " />
    </div>
</div>
  );
}
