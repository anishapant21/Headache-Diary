import React, {useState} from "react";

import { dataAches } from "../Firebase/fire.js";
import Table from "./Table.js";
import "../styles/history.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function History() {
  const [selectType, setSelectType] = useState("all");
  const [selectValue, setSelectValue] = useState("all");
  var keys = Object.keys(dataAches);
  var selectKeys;
  const handleSelectType = (e) => {
    setSelectType("Type");
    setSelectValue(e);
  };

  const handleSelectLocation = (e) => {
    setSelectType("Location");
    setSelectValue(e);
  };

  const handleSelectTrigger = (e) => {
    setSelectType("Trigger");
    setSelectValue(e);
  };

  const handleSelectOutdoors = (e) => {
    setSelectType("Outdoors");
    setSelectValue(e);
  };

  const handleSelectMedicines = (e) => {
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

  const rendermesana = selectKeys.map((key) => {
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

  return (
    <>
      <div className="filter">
        <button
          type="button"
          class="btn btn-primary filtereach"
          onClick={() => setSelectType("all")}
        >
          All
        </button>
        <DropdownButton
          title="Type of"
          id="dropdown-menu-align-right"
          onSelect={handleSelectType}
        >
          <Dropdown.Item eventKey="Summer">Summer</Dropdown.Item>
          <Dropdown.Item eventKey="Migraine">Migraine</Dropdown.Item>
          <Dropdown.Item eventKey="Sharp">Sharp</Dropdown.Item>
          <Dropdown.Item eventKey="Throbbing">Throbbing</Dropdown.Item>
          <Dropdown.Item eventKey="Dull">Dull</Dropdown.Item>
        </DropdownButton>

        <DropdownButton
          title="Location"
          id="dropdown-menu-align-right"
          onSelect={handleSelectLocation}
        >
          <Dropdown.Item eventKey="Left">Left</Dropdown.Item>
          <Dropdown.Item eventKey="Right">Right</Dropdown.Item>
          <Dropdown.Item eventKey="Both">Both</Dropdown.Item>
        </DropdownButton>
        <DropdownButton
          title="Triggers"
          id="dropdown-menu-align-right"
          onSelect={handleSelectTrigger}
        >
          <Dropdown.Item eventKey="Work">Work</Dropdown.Item>
          <Dropdown.Item eventKey="Stress">Stress</Dropdown.Item>
          <Dropdown.Item eventKey="Screen">Screen</Dropdown.Item>
          <Dropdown.Item eventKey="Hungry">Hungry</Dropdown.Item>
        </DropdownButton>

        <DropdownButton
          title="Outdoors"
          id="dropdown-menu-align-right"
          onSelect={handleSelectOutdoors}
        >
          <Dropdown.Item eventKey="Yes">Yes</Dropdown.Item>
          <Dropdown.Item eventKey="No">No</Dropdown.Item>
        </DropdownButton>
        <DropdownButton
          title="Medicines"
          id="dropdown-menu-align-right"
          onSelect={handleSelectMedicines}
        >
          <Dropdown.Item eventKey="yes">Yes</Dropdown.Item>
          <Dropdown.Item eventKey="no">No</Dropdown.Item>
        </DropdownButton>
      </div>

      <div className=" col-lg-9 offset-lg-1 table-responsive-sm table-wrapper">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
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
    </>
  );
}

export default History;

