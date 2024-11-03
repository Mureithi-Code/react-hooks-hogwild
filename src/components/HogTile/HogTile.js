import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './HogTile.css';

const HogTile = ({hog, onHide}) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  const handleHide = () => {
    onHide(hog.name);
  };

  return (
    <div className="hog-tile" onClick={handleClick}>
      <h2>{hog.name}</h2>
      <img src={hog.image} alt={hog.name} />
      {showDetails && (
        <div className="hog-details">
          <p><strong>Specialty:</strong> {hog.specialty}</p>
          <p><strong>Weight:</strong> {hog.weight} kg</p>
          <p><strong>Greased:</strong> {hog.greased ? 'Yes' : 'No'}</p>
          <p><strong>Highest Medal Achieved:</strong>{hog["highest medal achieved"]}</p>
        </div>
      )}
      <button onClick={handleHide}>Hide</button>
    </div>
  );
};

export default HogTile;



// import React from 'react'

// export default function HogTile({ hog }) {
//   return (
//     <div className="hog-tile">
//         <h2>{hog.name}</h2>
//         <img src={hog.image} alt={hog.name} />
//     </div>
//   );
// };
