import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './Home';
import { TC } from './TC';
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
import { PrivacyPolicy } from './PrivacyPolicy';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link, 
  
} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
   
    <Navbar/>
<Router>
    <Routes>

      <Route exact path="/" element={<Home/>} />
      <Route path="/message" element={<Message/>} />
      <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
      <Route path="/termsconditions" element={<TC/>} />
      
    </Routes>
</Router>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
