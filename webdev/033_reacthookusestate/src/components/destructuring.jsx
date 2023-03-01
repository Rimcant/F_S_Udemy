import React from "react";
import cars from "./practice"

console.log(cars)

function desctu() {
  const [honda, tesla] = cars;
  const { speedStats: { topSpeed: teslaTopSpeed } } = tesla
  const { coloursByPopularity: [teslaTopColour] } = tesla

  const { speedStats: { topSpeed: hondaTopSpeed } } = honda
  const { coloursByPopularity: [hondaTopColour] } = honda
  

    console.log(cars)
    return (
        <table>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
        </tr>
        <tr>
          <td>{tesla.model}</td>
          <td>{teslaTopSpeed}</td>
          <td>{teslaTopColour}</td>
        </tr>
        <tr>
          <td>{honda.model}</td>
          <td>{hondaTopSpeed}</td>
          <td>{hondaTopColour}</td>
        </tr>
      </table>

    )
    
}

export default desctu


