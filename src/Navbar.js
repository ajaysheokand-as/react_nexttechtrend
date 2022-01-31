import React from 'react';

export default function Navbar() {
  return <div>

<nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
  {/* Text Logo - Use this if you don't have a graphic logo */}
  {/* <a class="navbar-brand logo-text page-scroll" href="index.html">Evolo</a> */}
  {/* Image Logo */}
  <a className="navbar-brand logo-image" href="index.html"><h5>Next Tech Trend</h5></a>
  {/* Mobile Menu Toggle Button */}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-awesome fas fa-bars" />
    <span className="navbar-toggler-awesome fas fa-times" />
  </button>
  {/* end of mobile menu toggle button */}
  <div className="collapse navbar-collapse" id="navbarsExampleDefault">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link page-scroll" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link page-scroll" href="#services">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link page-scroll" href="#">Gallery</a>
      </li>
      <li className="nav-item">
        <a className="nav-link page-scroll" href="#learn">Learn</a>
      </li>
      {/* Dropdown Menu */}
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle page-scroll" href="#about" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">About</a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/termsconditions"><span className="item-text">Terms Conditions</span></a>
          <div className="dropdown-items-divide-hr" />
          <a className="dropdown-item" href="/privacypolicy"><span className="item-text">Privacy Policy</span></a>
        </div>
      </li>
      {/* end of dropdown menu */}
      <li className="nav-item">
        <a className="nav-link page-scroll" href="#contact">Contact</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle page-scroll" href="#about" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">Login</a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#"><span className="item-text">Admin</span></a>
          <div className="dropdown-items-divide-hr" />
          <a className="dropdown-item" href="#"><span className="item-text">Student</span></a>
        </div>
      </li>
    </ul>
  
  </div>
</nav>

  </div>;
}
