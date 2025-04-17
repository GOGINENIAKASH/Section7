import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Lab6.css";

const Lab6 = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios.get("https://reqres.in/api/unknown") // Correct API URL
      .then((res) => {
        setResult(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDelete = (id) => {
    setResult(result.filter((item) => item.id !== id));
  };
  const handleRetrieve = (id) => {
    setResult(result.filter((item) => item.id !== id))
  }

  return (
    <div>
      <h2>User List</h2>
      <table border={1}>
        <thead>
          <tr style={{ textAlign: "center", fontWeight: "bold", backgroundColor: "red" }}>
            <th>ID</th>
            <th>Name</th>
            <th>Year</th>
            <th>Color</th>
            <th>Pantone Value</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {result.map((element) => (
            <tr key={element.id} style={{ textAlign: "center", fontWeight: "bold", backgroundColor: element.color }}>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.year}</td>
              <td>{element.color}</td>
              <td>{element.pantone_value}</td>
              <td>
                <button onClick={() => handleDelete(element.id)} style={{ cursor: "pointer" }}>
                  Delete
                </button>
                <button onClick={() => handleRetrieve(element.id)} style={{ cursor: "pointer" }}>
                  Retrieve
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Lab6;
