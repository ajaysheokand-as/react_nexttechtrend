import React from 'react';

export const Request = () => {
  return <div>
 <div id="request" className="form-1">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="text-container">
          <h2>Fill The Following Form To Request A Meeting</h2>
          <p>Evolo is one of the easiest and feature packed marketing automation apps in the market. Discover what it can do for your business organization right away.</p>
          <ul className="list-unstyled li-space-lg">
            <li className="media">
              <i className="fas fa-check" />
              <div className="media-body"><strong className="blue">Automate your marketing</strong> activities and get results today</div>
            </li>
            <li className="media">
              <i className="fas fa-check" />
              <div className="media-body"><strong className="blue">Interact with all your</strong> targeted customers at a personal level</div>
            </li>
            <li className="media">
              <i className="fas fa-check" />
              <div className="media-body"><strong className="blue">Convince them to buy</strong> your company's awesome products</div>
            </li>
            <li className="media">
              <i className="fas fa-check" />
              <div className="media-body"><strong className="blue">Save precious time</strong> and invest it where you need it the most</div>
            </li>
          </ul>
        </div> {/* end of text-container */}
      </div> {/* end of col */}
      <div className="col-lg-6">
        {/* Request Form */}
        <div className="form-container">
          <form id="requestForm" data-toggle="validator" data-focus="false" noValidate="true">
            <div className="form-group">
              <input type="text" className="form-control-input" id="rname" name="rname" required />
              <label className="label-control" htmlFor="rname">Full name</label>
              <div className="help-block with-errors" />
            </div>
            <div className="form-group">
              <input type="email" className="form-control-input" id="remail" name="remail" required />
              <label className="label-control" htmlFor="remail">Email</label>
              <div className="help-block with-errors" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control-input" id="rphone" name="rphone" required />
              <label className="label-control" htmlFor="rphone">Phone</label>
              <div className="help-block with-errors" />
            </div>
           
            <div className="form-group">
              <select className="form-control-select" id="rselect" required>
                <option className="select-option" value disabled selected>Interested in...</option>
                <option className="select-option" value="HTML,CSS,JS">HTML,CSS,JS</option>
                <option className="select-option" value="PHP">PHP</option>
                <option className="select-option" value="MySQL">MySQL</option>
                <option className="select-option" value="ReactJS">ReactJS</option>
                <option className="select-option" value="C">C</option>
                <option className="select-option" value="CPP">CPP</option>
                <option className="select-option" value="Java">Java</option>
                <option className="select-option" value="Python">Python</option>
              </select>
              <div className="help-block with-errors" />
            </div>
            <div className="form-group checkbox">
              <input type="checkbox" id="rterms" defaultValue="Agreed-to-Terms" name="rterms" required />I agree with Evolo's stated <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms-conditions.html">Terms &amp; Conditions</a>
              <div className="help-block with-errors" />
            </div>
            <div className="form-group">
              <button type="submit" className="form-control-submit-button disabled">REQUEST</button>
            </div>
            <div className="form-message">
              <div id="rmsgSubmit" className="h3 text-center hidden" />
            </div>
          </form>
        </div> {/* end of form-container */}
        {/* end of request form */}
      </div> {/* end of col */}
    </div> {/* end of row */}
  </div> {/* end of container */}
</div>


  </div>;
};
