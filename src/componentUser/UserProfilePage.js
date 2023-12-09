import React, { useState } from 'react';
import './UserProfilePage.css';

const UserProfilePage = () => {
  const employees = [
    { id: 1, name: 'John Doe', DOB: '1.03.1997', role: 'Web Developer' },
    { id: 2, name: 'Jane Doe', DOB: '1.03.1997', role: 'Software Developer' },
    { id: 3, name: 'Bob Smith', DOB: '1.03.1997', role: 'Flutter Developer' },
    { id: 4, name: 'B smith', DOB: '1.03.1997', role: 'Android Developer' },
    { id: 5, name: 'Arun', DOB: '1.03.1997', role: 'Web Designer' },
    { id: 6, name: 'Ajith', DOB: '1.03.1993', role: 'Software Engineer' },
    { id: 7, name: 'saro', DOB: '1.03.1999', role: 'React Developer' },
    { id: 8, name: 'saravanan', DOB: '1.03.1997', role: 'Java Developer' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(employees);

  const handleSearch = () => {
    const filteredResults = employees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.id.toString().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div className='Container'>
      <h3>All Employees</h3>
      <div className="SearchContainer">
        <input
          type='text'
          placeholder='Search by Name or ID'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="SearchInput"
        />
        <button onClick={handleSearch} className="SearchButton">Search</button>
      </div>
      {searchResults.map((employee) => (
        <div key={"Employee Id:" + employee.id} className="EmployeeBox">
          <ul className="EmployeeInfo">
          <li><strong>Name:</strong> {employee.name}</li>
            <li><strong>ID:</strong> {employee.id}</li>
            <li><strong>DOB:</strong> {employee.DOB}</li>
            <li><strong>Role:</strong> {employee.role}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default UserProfilePage;

