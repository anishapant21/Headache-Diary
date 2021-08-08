import React, { useState, useEffect } from "react";
//import firebase from "firebase";
import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage
import 'firebase/auth';
import Doughnuts from "./Doughnuts";
import "../styles/Summary.css";

function Summary() {
  const [seeAll, setSeeAll] = useState(true);
  const [typeState, setTypeState] = useState([]);
  const [typeCounts, setTypeCounts] = useState([]);
  const [sympState, setSympState] = useState([]);
  const [sympCounts, setSympCounts] = useState([]);
  const database = firebase.database();
  var ref = database.ref("aches");


  //colors on doughnuts

  const color1 = ["#EFE6DD", "#7EBDC2", "#F3DFA2", "#BB4430", "#55917F"];

  const color2 = ["#6E2594", "#DEA47E", "#ECD444", "#D68FD6", "#8AB9B5"];

  const color3 = ["#F2545B", "#A93F55", "#19323C", "#646F4B", "#B6A6CA"];

  const color4 = ["#A1E8AF", "#372772", "#D3BDB0", "#D9F0FF", "#DF367C"];

  function errData(err) {
    console.log("Error");
  }

  var typed;
  var typesVal;
  var typesCount;
  var symptoms;
  var sympVal;
  var sympCount;

  useEffect(() => {
    var listtypes = [];
    var listSymptoms = [];
    ref.on("value", gotData, errData);
    function gotData(data) {
      var dataAches = data.val();

      const chart = () => {
        var keys = Object.keys(dataAches);

        for (let i = 0; i < keys.length; i++) {
          var k = keys[i];
          typed = dataAches[k].type;
          //check this //////the data is getting pushed on each refresh
          listtypes.push(typed);
        }

        //for symptoms
        for (let j = 0; j < keys.length; j++) {
          var x = keys[j];
          symptoms = dataAches[x].symptoms;
          //check this //////the data is getting pushed on each refresh
          listSymptoms.push(symptoms);
        }

        ///////////// For TYPES OF HEADACHES /////

        const map = listtypes.reduce(
          (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
          new Map()
        );
        typesVal = [...map.keys()];
        setTypeState(typesVal);
        typesCount = [...map.values()];
        setTypeCounts(typesCount);
        //////////////////////////////////////////

        ///////////// For SYMPTOMS /////

        const mapSymp = listSymptoms.reduce(
          (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
          new Map()
        );
        sympVal = [...mapSymp.keys()];
        setSympState(sympVal);
        sympCount = [...mapSymp.values()];
        setSympCounts(sympCount);
        
        //////////////////////////////////////////
      };

      if (dataAches != null) {
        chart();
      }
    }
  }, []);
  var renderme;
  if (seeAll === true) {
    renderme = (
      <div>
        <div className="row container-fluid piebox">
          <div className="col-lg-4 offset-lg-3 col-12 eachpie">
            <Doughnuts
              typesVal={typeState}
              typesCount={typeCounts}
              color={color1}
              width={200}
              height={200}
            />
          </div>
          <div className="col-lg-4 col-12 eachpie">
            <Doughnuts
              typesVal={sympState}
              typesCount={sympCounts}
              color={color2}
            />
          </div>
        </div>
        <div className="  text-center">
          <button
            type="button"
            className="seeall btn "
            onClick={() => setSeeAll(!seeAll)}
          >
            SEE ALL
          </button>
        </div>
      </div>
    );
  } else if (seeAll === false) {
    renderme = (
      <div>
        {" "}
        <div className="row container-fluid piebox">
          <div className="col-lg-4 offset-lg-3 col-12 eachpie">
            <Doughnuts
              typesVal={typeState}
              typesCount={typeCounts}
              color={color1}
            />
          </div>
          <div className="col-lg-4 col-12 eachpie">
            <Doughnuts
              typesVal={sympState}
              typesCount={sympCounts}
              color={color2}
            />
          </div>
        </div>
        <div className="row container-fluid piebox">
          <div className="col-lg-4 offset-lg-3 col-12 eachpie">
            <Doughnuts
              typesVal={typeState}
              typesCount={typeCounts}
              color={color3}
            />
          </div>
          <div className="col-lg-4 col-12 eachpie">
            <Doughnuts
              typesVal={sympState}
              typesCount={sympCounts}
              color={color4}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="summary-wrapper">
      <div className="container-fluid mt-5 pb-5">
        <div className="post-heading text-center">
          <div className="display-4 font-weight-bold">SUMMARY</div>
          <hr className="w-50 mx-auto pb-1 mb-5"></hr>
        </div>
      </div>
      {renderme}
    </div>
  );
}

export default Summary;
