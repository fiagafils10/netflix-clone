import React from 'react'
import CategoryRow from '../components/CategoryRow'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import requests from '../requests'


export default function Home() {
    

  return (
    <>
          <Navbar />
        <Main/>

        <CategoryRow rowId ='1' title ='Popular' fetchURL = {requests.requestPopular} />
        <CategoryRow rowId ='2' title ='Top Rated' fetchURL = {requests.requestTopRated} />
        <CategoryRow rowId ='3' title ='Trending' fetchURL = {requests.requestTrending}/>
        <CategoryRow rowId ='4' title ='Horror' fetchURL = {requests.requestHorror} />
        <CategoryRow rowId ='5' title ='Upcomming' fetchURL = {requests.requestUpcoming} />
     
    </>
  )
}


