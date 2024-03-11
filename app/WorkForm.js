import React, { useState } from 'react';



  const WorkerForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Log data to check if it's correct
    console.log('Data to be sent:', { name, email, code });
  
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
  

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    boxSizing: 'border-box',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '10px',
  };

  const buttonStyle = {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <form style={{ maxWidth: '400px', margin: '20px auto', padding: '15px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }} onSubmit={handleSubmit}>
      <label style={labelStyle}>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
      </label>
      <br />
      <label style={labelStyle}>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
      </label>
      <br />
      <label style={labelStyle}>
        Code:
        <input type="text" value={code} onChange={(e) => setCode(e.target.value)} style={inputStyle} />
      </label>
      <br />
      <button type="submit" style={buttonStyle}>Submit</button>
    </form>
  );
};

export default WorkerForm;
