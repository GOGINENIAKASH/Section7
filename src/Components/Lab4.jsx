import React, { useState } from 'react'; // Correctly import React and useState hook
import './Lab9.css'; // Importing the corresponding CSS file for styles

const Lab4 = () => {
  // State to hold numbers in the list
  const [numbers, setNumbers] = useState([1, 2, 3, 4]);

  // Function to handle adding a new random number
  const addNumber = () => {
    const newNumber = Math.floor(Math.random() * 100); // Generate a random number between 0 and 99
    setNumbers([...numbers, newNumber]);
  };

  return (
    <div className="lab9-container">
      <div className="lab9-grid">
        {numbers.map((num, index) => (
          <div key={index} className="lab9-number-item">
            {num}
          </div>
        ))}
      </div>
      <button onClick={addNumber} className="lab9-add-button">Add Number</button>
    </div>
  );
};

export default Lab4;
