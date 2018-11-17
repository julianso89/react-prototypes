import React from "react";
import Table from "./table";

export default () => {
  const students = [
    {
      name: "Jul",
      course: "Math",
      grade: 90
    },
    {
      name: "Sri",
      course: "Bio",
      grade: 95
    },
    {
      name: "Mike",
      course: "Marine",
      grade: 100
    }
  ];

  return (
    <div className="container">
      <h1>Student Grade Table</h1>
      <Table data={students} />
    </div>
  );
};
