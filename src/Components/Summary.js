import React, { useState } from "react";
import firebase from "firebase";
import { useEffect } from "react/cjs/react.development";
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
  //   ref.on("value", gotData, errData);
  var d;

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

        console.log(listSymptoms);
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
        console.log("I am symptoms", sympState);
        console.log("I am symptoms", sympCounts);
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
              width={200}
              height={200}
            />
          </div>
          <div className="col-lg-4 col-12 eachpie">
            <Doughnuts typesVal={sympState} typesCount={sympCounts} />
          </div>
        </div>
        <div className="  text-center">
          <button
            type="button"
            class="seeall btn "
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
              width={200}
              height={200}
            />
          </div>
          <div className="col-lg-4 col-12 eachpie">
            <Doughnuts typesVal={sympState} typesCount={sympCounts} />
          </div>
        </div>
        <div className="row container-fluid piebox">
          <div className="col-lg-4 offset-lg-3 col-12 eachpie">
            <Doughnuts
              typesVal={typeState}
              typesCount={typeCounts}
              width={200}
              height={200}
            />
          </div>
          <div className="col-lg-4 col-12 eachpie">
            <Doughnuts typesVal={sympState} typesCount={sympCounts} />
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
