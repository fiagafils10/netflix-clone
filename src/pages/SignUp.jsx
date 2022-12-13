import React from "react";
import SignUpBody from "../components/signUpComponent/SignUpBody";
import SignUpHead from "../components/signUpComponent/SignUpHead";
import SignUpAccordion from "../components/signUpComponent/SignUpAccordion";
import Navbar from "../components/Navbar";


const SignUp = () => {




  return (
    <>
      <Navbar />
      <SignUpHead />

      <SignUpBody customClassName ={ 'md:flex-row'}
      title ={'Enjoy on your TV.'} 
      description={'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'}
      imgLink={'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'}/>
      
      <SignUpBody
      customClassName ={ 'md:flex-row-reverse'}
      title ={'Download your shows to watch offline.'} 
      description={'Save your favorites easily and always have something to watch.'}
      imgLink={'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'}/>
      
      <SignUpBody
      customClassName ={ 'md:flex-row'}
       title ={'Watch everywhere.'} 
      description={'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.'}
      imgLink={'https://fs.npstatic.com/userfiles/7715851/image/english_multiple_device_collage-w810h462.jpg'}/>
      
      <SignUpBody 
       customClassName ={ 'md:flex-row-reverse'}
      title ={'Create profiles for kids.'} 
      description={'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.'}
      imgLink={'https://occ-0-5389-3851.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f'}/>
      
      <SignUpAccordion />

   
    </>
  );
};

export default SignUp;
