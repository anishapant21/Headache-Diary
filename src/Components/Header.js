import React from "react";
import "../styles/header.css";
import Weather from "./Weather";
import Note from "./Note";
import Log from "./Log";
import HeadacheForm from "./HeadacheForm";
import { useLog } from "../Context/LogContext.js";

function Header() {
  const logButts = useLog();

  let renderMe;
  if (logButts) {
    renderMe = (
      <div className="header-wrapper container-fluid">
        <div className="col-lg-7 offset-lg-2 col-12 mt-5 ml-2 mr-2 ">
          <div className="card headstate">
            <div className="card-body">
              <div className="col-lg-12">
                <Weather />
              </div>
              <div className="row">
                <Note />
                <Log />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    renderMe = (
      <div className="col-lg-7 offset-lg-2 col-12 mt-5 ml-2 mr-2">
        <div className="card">
          <div className="card-body">
            <HeadacheForm />
          </div>
        </div>
      </div>
    );
  }
  return <>{renderMe}</>;
}

export default Header;
