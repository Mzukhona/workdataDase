import React, { useState } from 'react';
import styles from './style';

const WorkerForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send data to your Express.js backend
    try {
      const response = await fetch('http://localhost:3000/saveWorker', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, code }),
      });

      const data = await response.json();
      console.log('Server response:', data);
    } catch (error) {
      console.error('Error sending data to server:', error);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Code:
        <input type="text" value={code} onChange={(e) => setCode(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default WorkerForm;
