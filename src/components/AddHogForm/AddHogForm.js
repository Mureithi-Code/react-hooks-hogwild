import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './AddHogForm.css';

const AddHogForm = ({addHog}) => {
  const [name, setName] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [weight, setWeight] = useState('');
  const [greased, setGreased] = useState('false');
  const [highestMedal, setHighestMedal] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHog = {
      name,
      speciality,
      weight: parseFloat(weight),
      greased,
      "highest medal achieved": highestMedal,
      image,
    };
    addHog(newHog);
    setName('');
    setSpeciality('');
    setGreased(false);
    setHighestMedal('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a New Hog</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Speciality"
        value={speciality}
        onChange={(e) => setSpeciality(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        required
      />
      <label>
        Greased:
        <input 
          type="checkbox"
          checked={greased}
          onChange={(e) => setGreased(e.target.checked)}
        />
      </label>
      <input
        type="text"
        placeholder="Highest Medal Achieved"
        value={highestMedal}
        onChange={(e) => setHighestMedal(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Imahe URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <button type="submit">Add Hog</button>
    </form>
  );
};

AddHogForm.propTypes = {};

AddHogForm.defaultProps = {};

export default AddHogForm;
