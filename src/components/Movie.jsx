import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase-config";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  
  const { user } = UserAuth();

  const movieID = doc(db, 'users', `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert('Please log in to save a movie');
    }
  };

  return (
    <div className="w-[300px] border border-opacity-10 overflow-hidden inline-block cursor-pointer relative object-cover mx-10 ">
      <img
        className="h-auto w-full hover:scale-110 transition-transform duration-300 "
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute bg-black/70 top-0 left-0 h-full w-full opacity-0  hover:opacity-100 transition-opacity duration-300">
        <p className="text-white font-extrabold w-3/12 p-1" onClick={saveShow}>
          {like ? (
            <FaHeart className="h-5 w-5" />
          ) : (
            <FaRegHeart className="h-5 w-5" />
          )}
        </p>
        <p className="text-white font-extrabold text-2xl  whitespace-normal h-full w-full flex items-center justify-center text-center">
          {item.title}
        </p>
      </div>
    </div>
  );
};
export default Movie;
