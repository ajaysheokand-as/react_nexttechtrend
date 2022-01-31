import React from 'react';

export default function VideoTour() {
  return <div>

<div className="basic-3">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <h2>Video Tour</h2>
      </div> {/* end of col */}
    </div> {/* end of row */}
    <div className="row">
      <div className="col-lg-12">
        {/* Video Preview */}
        <div className="image-container">
          <div className="video-wrapper">
          <iframe width="864" height="450" src="https://www.youtube.com/embed/PhI4fUm3y8E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            {/* <a className="popup-youtube" href="https://www.youtube.com/watch?v=fLCjQJCekTs" data-effect="fadeIn">
              <img className="img-fluid" src="images/video-frame.svg" alt="alternative" />
              <span className="video-play-button">
                <span />
              </span>
            </a> */}
          </div> {/* end of video-wrapper */}
        </div> {/* end of image-container */}
        {/* end of video preview */}
        <p>This video will show you a case study for one of our <strong>Major Customers</strong> and will help you understand why your startup needs Evolo in this highly competitive market</p>
      </div> {/* end of col */}
    </div> {/* end of row */}
  </div> {/* end of container */}
</div>


  </div>;
}
