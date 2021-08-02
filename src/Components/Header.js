import React from "react";
import "../styles/header.css";
import Weather from "./Weather";
import Note from "./Note";
import Log from "./Log";
import { useState } from "react/cjs/react.development";
import HeadacheForm from "./HeadacheForm";

function Header() {
  const [logButton, setLogButton] = useState(true);
  let renderMe;
  if (logButton) {
    
    renderMe = <div className="header-wrapper container-fluid">
    <div className="col-lg-7 offset-lg-2 col-12 mt-5 ml-2 mr-2">
      <div className="card">
        <div className="card-body">
          <div className="col-lg-12">
            <Weather />
          </div>
          <div className="row">
            <Note />
            <div className="col-lg-5 offset-lg-1 cold-md-6 col-12">
              <div className="circle">
                <div className="center">
                  <p>
                    Last Headache
                    <br />
                    41 DAYS
                    <br />
                    ago
                  </p>
                </div>
              </div>
              <button type="button" class="btn btn-info buttonlog" onClick={()=>setLogButton(false)}>
                LOG HEADACHE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  } else {
      renderMe =  <div className="col-lg-7 offset-lg-2 col-12 mt-5 ml-2 mr-2">
      <div className="card">
        <div className="card-body">
            <HeadacheForm />
        </div>
        </div>
        </div>
  }
  return (
      <>
      {renderMe}
      </>
    
  );
}

export default Header;
