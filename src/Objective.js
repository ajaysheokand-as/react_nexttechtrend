import React from 'react';

export default function Objective() {
  return <div>
<div id="services" className="cards-1">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <h2>Our Services</h2>
        <p className="p-heading p-large">It is a Co- Education school opens to students of all caste and creed and holds up to them the motto: “SCIRE, AMARE ET SERVIRE “(TO LEARN, TO LOVE AND TO SERVE). Although it is a Christian (Catholic Church) Minority School, every student is encouraged to practice his/her religion.</p>
      </div> {/* end of col */}
    </div> {/* end of row */}
    <div className="row">
      <div className="col-lg-12">
        {/* Card */}
        <div className="card">
          <img className="card-image" src="images/services-icon-1.svg" alt="alternative" />
          <div className="card-body">
            <h4 className="card-title">English Environment</h4>
            <p>Our team of enthusiastic marketers will analyse and evaluate how your company stacks against the closest competitors</p>
          </div>
        </div>
        {/* end of card */}
        {/* Card */}
        <div className="card">
          <img className="card-image" src="images/services-icon-2.svg" alt="alternative" />
          <div className="card-body">
            <h4 className="card-title">Deciplined</h4>
            <p>Once the market analysis process is completed our staff will search for opportunities that are in reach</p>
          </div>
        </div>
        {/* end of card */}
        {/* Card */}
        <div className="card">
          <img className="card-image" src="images/services-icon-3.svg" alt="alternative" />
          <div className="card-body">
            <h4 className="card-title">Smart Classes</h4>
            <p>With all the information in place you will be presented with an action plan that your company needs to follow</p>
          </div>
        </div>
        {/* end of card */}
      </div> {/* end of col */}
    </div> {/* end of row */}
  </div> {/* end of container */}
</div>


  </div>;
}
