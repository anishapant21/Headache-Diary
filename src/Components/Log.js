import React, { useEffect, useState } from "react";
import "../styles/log.css";
import { useToggle } from "../Context/LogContext.js";
//import firebase from "firebase";
import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage

import 'firebase/auth';
function Log() {
  const [days, setDays] = useState(0);
  const toggleLog = useToggle();

  const database = firebase.database();
  var ref = database.ref("aches");
  ref.on("value", gotData, errData);
  var datadate;

  function errData(err) {
    console.log("Error");
  }
  var difinday;

  function gotData(data) {
    var dataAches = data.val();

    //calculates the number of days
    const callmemaybe = () => {
      var keys = Object.keys(dataAches);
      const e = keys[keys.length - 1];
      datadate = dataAches[e].date;
    
      const currDate = new Date(datadate);

      var currmid = currDate.toISOString().split("T")[0].split("-");
      var curfin = currmid[1] + "/" + currmid[2] + "/" + currmid[0];

      const curfind = new Date(curfin);

      const todayDate = new Date();

  
      var difINtime = Math.abs(todayDate.getTime() - curfind.getTime());
      difinday = Math.round(difINtime / (1000 * 3600 * 24));
    };

    if (dataAches != null) {
      callmemaybe();
    }
  }

  useEffect(() => {
    setDays(difinday);
  }, [difinday]);
  return (
    <div className="col-lg-5 offset-lg-1 cold-md-6 col-12">
      <div className="circle">
        <div className="center">
          <p>
            Last Headache
            <br />
            {days} DAYS
            <br />
            ago
          </p>
        </div>
      </div>
      <button type="button" className="btn btn-info buttonlog" onClick={toggleLog}>
        LOG HEADACHE
      </button>
    </div>
  );
}

export default Log;
