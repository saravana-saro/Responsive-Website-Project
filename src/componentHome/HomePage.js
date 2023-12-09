import React from 'react';
import './HomePage.css'; 

const HomePage = () => {
  return (
    <div className="Container">
      <h1>Dashboard</h1>
      <div className="search">
        <input type="text" placeholder="search" />
      </div>
      <ul>
        <li>Productivity on Monday</li>
        <li>Productivity on Tuesday</li>
        <li>Productivity on Wednesday</li>
        <li>Productivity on Thursday</li>
        <li>Productivity on Friday</li>
      </ul>
    </div>
  );
};

export default HomePage;

