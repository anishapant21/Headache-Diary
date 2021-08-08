import React from "react";
import {
  triggerList,
  outdoorsList,
  painList,
  tempList,
  medList,
} from "../Firebase/fire.js";
import "../styles/insights.css";

function Insights() {
  //Temperature
  var sum = 0;
  var averageTemp;

  for (let i = 0; i < tempList.length; i++) {
    sum += Number(tempList[i]);
    averageTemp = Math.round(sum / tempList.length);
    
  }

  //Trigger
  var mf = 1;
  var m = 0;
  var item;
  for (var i = 0; i < triggerList.length; i++) {
    for (var j = i; j < triggerList.length; j++) {
      if (triggerList[i] === triggerList[j]) m++;
      if (mf < m) {
        mf = m;
        item = triggerList[i];
      }
    }
    m = 0;
  }

  const percentTrigger = Math.round((mf / triggerList.length) * 100);

  //Pain
  var sumPain = 0;
  var averagePain;
  

  for (i = 0; i < painList.length; i++) {
    sumPain += Number(painList[i]);
    averagePain = Math.round(sumPain / painList.length);
  }

  //outdoors
  var mfo = 1;
  var mo = 0;
  var itemo;
  for (i = 0; i < outdoorsList.length; i++) {
    for (j = i; j < outdoorsList.length; j++) {
      if (outdoorsList[i] === outdoorsList[j]) mo++;
      if (mfo < mo) {
        mfo = mo;
        itemo = outdoorsList[i];
      }
    }
    mo = 0;
  }

  const percentOutdoor = Math.round((mfo / outdoorsList.length) * 100);
  

  //medicine

  var mfm = 1;
  var mm = 0;
  var itemm;
  for (i = 0; i < medList.length; i++) {
    for (j = i; j < medList.length; j++) {
      if (medList[i] === medList[j]) mm++;
      if (mfm < mm) {
        mfm = mm;
        itemm = medList[i];
      }
    }
    mm = 0;
  }

  const percentMedicine = 100 - Math.round((mfm / medList.length) * 100);
  
  return (
    <div className=" insights-wrapper container-fluid">
      <div className="col-lg-6 offset-lg-3 col-12 mt-5 ml-2 mr-2 ">
        <div>
          <div className="card border-dark mb-3 maincard">
            <div className="card-header">Featured</div>
            <ul className="list-group">
              <div className="card">
                <li className="list-group-item">
                  {" "}
                  <p className="textbox">
                    The average temp at which you get headache is {averageTemp}
                  </p>
                </li>
              </div>
              <div className="card">
                <li className="list-group-item">
                  <p className="textbox">
                    {item} triggers you {percentTrigger}% of the times.
                  </p>
                </li>{" "}
              </div>
              <div className="card">
                <li className="list-group-item">
                  <p className="textbox">
                    Your average pain level is {averageTemp}
                  </p>
                </li>{" "}
              </div>
              <div className="card">
                <li className="list-group-item">
                  <p className="textbox">
                    You get headaches {percentOutdoor}% of the times you go
                    outdoors.
                  </p>
                </li>
              </div>
              <div className="card">
                <li className="list-group-item">
                  <p className="textbox">
                    You have to take medicines {percentMedicine} % of the times.
                  </p>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insights;
