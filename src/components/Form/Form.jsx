import React, { useState } from 'react';

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const FirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const LastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const GreetClick = () => {
    alert(`Hello ${firstName} ${lastName}!`);
  };

  return (
    <div>
      <h2>Greet Me Form</h2>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={FirstNameChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={LastNameChange}
        />
      </div>
      <button onClick={GreetClick}>Greet Me</button>
    </div>
  );
}

export default Form;