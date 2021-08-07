import React from "react";

function Table({
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
}) {
  return (
    <>
      <tr>
        <th scope="row"></th>
        <td>{date}</td>
        <td>{time}</td>
        <td>{start}</td>
        <td>{location}</td>
        <td>{symptoms}</td>
        <td>{temp}</td>
        <td>{weather}</td>
        <td>{pain}</td>
        <td>{triggers}</td>
        <td>{type}</td>
        <td>{outdoors}</td>
        <td>{medicine}</td>
      </tr>
    </>
  );
}

export default Table;
