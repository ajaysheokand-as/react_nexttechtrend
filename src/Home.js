import React from 'react';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Message from './Message';
import MessageRight from './MessageRight';
import Navbar from './Navbar';
import Objective from './Objective';
import reportWebVitals from './reportWebVitals';
import Slider from './Slider';
import Staff from './Staff';
import VideoTour from './VideoTour';
import { Request  } from './Request';

export const Home = () => {
  return <div>
       <Header/>
    <Objective/>
    <MessageRight/>
    {/* <Request/> */}
    <Staff/>
    <Message/>
    <Slider/>
    <VideoTour/>
    <Contact/>
    <Footer/>
  </div>;
};
