import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MessageRight() {
  return <div>
<div id='learn' className="basic-2">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="image-container">
          <img className="img-fluid" src="images/details-2-office-team-work.svg" alt="alternative" />
        </div> {/* end of image-container */}
      </div> {/* end of col */}
      <div className="col-lg-6">
        <div className="text-container">
          <h2>Learn With Us </h2>
          <ul className="list-unstyled li-space-lg">
            <li className="media">
              {/* <FontAwesomeIcon icon={["fas", "coffee"]} /> */}
              <div className="media-body">1. Basically we'll teach you step by step what you need to do</div>
            </li>
            <li className="media">
              {/* <i className="fas fa-check" /> */}
              <div className="media-body">2. In order to develop your company and reach new heights</div>
            </li>
            <li className="media">
              {/* <i className="fas fa-check" /> */}
              <div className="media-body">3. Everyone will be pleased from stakeholders to employees</div>
            </li>
          </ul>
          <a className="btn-solid-reg popup-with-move-anim" href="#details-lightbox-2">MORE</a>
        </div> {/* end of text-container */}
      </div> {/* end of col */}
    </div> {/* end of row */}
  </div> {/* end of container */}
</div>


  </div>;
}
