import React from 'react';

export default function Header() {
  return <div>

<header id="header" className="header">
  <div className="header-content">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="text-container">
            <h1><span className="turquoise">WELCOME TO </span><br/> CODDER COMMUNITY</h1>
            <p className="p-large">JOIN US TOGETHER WE IMPORVE CODING SKILLS  </p>
            <a className="btn-solid-lg page-scroll" href="#services">CONTACT US</a>
          </div> {/* end of text-container */}
        </div> {/* end of col */}
        <div className="col-lg-6">
          <div className="image-container">
            <img className="img-fluid" src="images/header-teamwork.svg" alt="alternative" />
          </div> {/* end of image-container */}
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </div> {/* end of header-content */}
</header>


  </div>;
}
