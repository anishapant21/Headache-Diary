import React, { useState } from "react";

import { dataAches } from "../Firebase/fire.js";
import Table from "./Table.js";
import "../styles/history.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useEffect } from "react/cjs/react.development";

function History() {
  const [selectType, setSelectType] = useState("all");
  const [selectValue, setSelectValue] = useState("all");

  var handleSelectType;
  var handleSelectLocation;
  var  handleSelectTrigger;
  var handleSelectOutdoors;
  var handleSelectMedicines;
  var rendermesana;

  useEffect(()=>{
    
  })
  if (dataAches !==undefined){
    var keys = Object.keys(dataAches);
  var selectKeys;
  handleSelectType = (e) => {
    setSelectType("Type");
    setSelectValue(e);
  };

  handleSelectLocation = (e) => {
    setSelectType("Location");
    setSelectValue(e);
  };

  handleSelectTrigger = (e) => {
    setSelectType("Trigger");
    setSelectValue(e);
  };

  handleSelectOutdoors = (e) => {
    setSelectType("Outdoors");
    setSelectValue(e);
  };

  handleSelectMedicines = (e) => {
    setSelectType("Medicines");
    setSelectValue(e);
  };

  if (selectType === "all") {
    selectKeys = keys;
  } else if (selectType === "Type") {
    selectKeys = keys.filter((key) => dataAches[key].type === `${selectValue}`);
  } else if (selectType === "Location") {
    selectKeys = keys.filter(
      (key) => dataAches[key].location === `${selectValue}`
    );
  } else if (selectType === "Trigger") {
    selectKeys = keys.filter(
      (key) => dataAches[key].triggers === `${selectValue}`
    );
  } else if (selectType === "Outdoors") {
    selectKeys = keys.filter(
      (key) => dataAches[key].outdoors === `${selectValue}`
    );
  } else if (selectType === "Medicines") {
    selectKeys = keys.filter(
      (key) => dataAches[key].medicine === `${selectValue}`
    );
  }

  rendermesana = selectKeys.map((key) => {
    const {
      date,
      location,
      medicine,
      outdoors,
      start,
      symptoms,
      temp,
      time,
      triggers,
      type,
      pain,
      weather,
    } = dataAches[key];

    return (
      <Table
      key={key}
        triggers={triggers}
        date={date}
        location={location}
        medicine={medicine}
        outdoors={outdoors}
        start={start}
        symptoms={symptoms}
        temp={temp}
        time={time}
        type={type}
        pain={pain}
        weather={weather}
      />
    );
  });

  }
  

 

 

  return (
    <div className="history-wrapper">
      <div className="filter">
        <div>
          <button
            type="button"
            className="btn btn-primary filtereach"
            onClick={() => setSelectType("all")}
          >
            All
          </button>
        </div>

        <div className="filtereach">
          <DropdownButton
            title="Type"
            id="dropdown-menu-align-right"
            variant="info"
            onSelect={handleSelectType}
          >
            <Dropdown.Item eventKey="Summer">Summer</Dropdown.Item>
            <Dropdown.Item eventKey="Migraine">Migraine</Dropdown.Item>
            <Dropdown.Item eventKey="Sharp">Sharp</Dropdown.Item>
            <Dropdown.Item eventKey="Throbbing">Throbbing</Dropdown.Item>
            <Dropdown.Item eventKey="Dull">Dull</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="filtereach">
          <DropdownButton
            title="Location"
            id="dropdown-menu-align-right"
            variant="info"
            onSelect={handleSelectLocation}
          >
            <Dropdown.Item eventKey="Left">Left</Dropdown.Item>
            <Dropdown.Item eventKey="Right">Right</Dropdown.Item>
            <Dropdown.Item eventKey="Both">Both</Dropdown.Item>
          </DropdownButton>
        </div>

        <div className="filtereach">
          <DropdownButton
            title="Triggers"
            id="dropdown-menu-align-right"
            variant="info"
            onSelect={handleSelectTrigger}
          >
            <Dropdown.Item eventKey="Work">Work</Dropdown.Item>
            <Dropdown.Item eventKey="Stress">Stress</Dropdown.Item>
            <Dropdown.Item eventKey="Screen">Screen</Dropdown.Item>
            <Dropdown.Item eventKey="Hungry">Hungry</Dropdown.Item>
          </DropdownButton>
        </div>

        <div className="filtereach">
          <DropdownButton
            title="Outdoors"
            id="dropdown-menu-align-right"
            variant="info"
            onSelect={handleSelectOutdoors}
          >
            <Dropdown.Item eventKey="Yes">Yes</Dropdown.Item>
            <Dropdown.Item eventKey="No">No</Dropdown.Item>
          </DropdownButton>
        </div>

        <div className="filtereach">
          <DropdownButton
            title="Medicines"
            id="dropdown-menu-align-right"
            variant="info"
            onSelect={handleSelectMedicines}
          >
            <Dropdown.Item eventKey="yes">Yes</Dropdown.Item>
            <Dropdown.Item eventKey="no">No</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>

      <div className=" col-lg-8 offset-lg-2 table-responsive-sm table-wrapper">
        <table className="table table-bordered border-danger table-striped">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Start</th>
              <th scope="col">Location</th>
              <th scope="col">Symptoms</th>
              <th scope="col">Temperature</th>
              <th scope="col">Weather</th>
              <th scope="col">Pain</th>
              <th scope="col">Triggers</th>
              <th scope="col">Type</th>
              <th scope="col">Outdoors</th>
              <th scope="col">Medicine</th>
            </tr>
          </thead>
          <tbody>{rendermesana}</tbody>
        </table>
      </div>
    </div>
  );
}

export default History;
