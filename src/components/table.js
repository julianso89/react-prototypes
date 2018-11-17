import React from "react";

function Table() {
  return (
    <table className="table">
      <thead className="thead">
        <tr>
          <th>Name</th>
          <th>Course</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Kobe</td>
          <td>Basketball</td>
          <td>100</td>
        </tr>
        <tr>
          <td>Michael</td>
          <td>Golf</td>
          <td>50</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;