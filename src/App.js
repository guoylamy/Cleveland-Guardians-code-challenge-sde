import React, { useState, useEffect } from 'react';
import './App.css';
import Employees from "./data/Employees.json";
import Requests from "./data/Requests.json";

function App() {
  const [user, setUser] = useState('');
  const [userName, setUserName] = useState('');

  const updateUser = () => {
    const inptUser = document.getElementById('inpt').value;
    
    const employeeInfo = Employees.filter(employee => employee.employee_id === parseInt(inptUser));
    if (employeeInfo.length !== 0) {
      setUser(inptUser);
      setUserName(employeeInfo[0].name);
    } else {
      document.getElementById("inputHint").innerHTML = "Cannot find this uesr, please re-enter your employee id";
    }
    
  };

  const cleanUser = async () => {
    setUser('');
    setUserName('');
  };

  const TicketBox = () => (
    <table className="ticket-box" border="2">
      <caption> Your ticket request </caption>
      <tbody>
      <tr>
        <th>Approved</th>
        <th>Number of Tickets</th>
        <th>Requested Game Date</th>
        <th>Entry Time</th>
        <th>Requested Date</th>
      </tr>
      {
        Requests
        .filter(request => request.employee_id === parseInt(user))
        .map((request, i) => (
              <tr key={request.request_id}>
                <td>{request.isApproved}</td>
                <td>{request.number_of_tickets}</td>
                <td>{request.game_date}</td>
                <td>{request.entry_time}</td>
                <td>{request.date_requested}</td>
              </tr>
        )
          
        
        )
      }
      </tbody>
    </table>
  );

  const OtherTicketBox = () => {
    const employeeInfo = Employees.filter(employee => employee.employee_id === parseInt(user));
    var otherEmployeeInfo = Employees.filter(employee => employee.employee_id !== parseInt(user));
    if (employeeInfo[0].isAdmin !== "yes") {
      otherEmployeeInfo = otherEmployeeInfo.filter(employee => employee.department === employeeInfo[0].department);     
    } 
    var otherEmployeeTickets = otherEmployeeInfo.flatMap(e => {
      var eRequest = Requests.filter(request => request.employee_id === e.employee_id);
      return eRequest.map(r => ({
        "employeeName": e.name,
        "dept": e.department,
        "isApproved": r.isApproved,
        "number_of_tickets": r.number_of_tickets,
        "game_date": r.game_date,
        "entry_time": r.entry_time,
        "date_requested": r.date_requested
      }));
    });
    const type = employeeInfo[0].isAdmin === "yes" ?  "from all departments" : "from  the same department";
    return (
      <table className="employee-ticket-box" border="2">
        <caption> Requests from others ({type})</caption>
        <tbody>
        <tr>
          <th>Employee</th>
          <th>Department</th>
          <th>Approved</th>
          <th>Number of Tickets</th>
          <th>Requested Game Date</th>
          <th>Entry Time</th>
          <th>Requested Date</th>
        </tr>
        {
          otherEmployeeTickets
          .map((request, i) => (
                <tr key={request.request_id}>
                  <td>{request.employeeName}</td>
                  <td>{request.dept}</td>
                  <td>{request.isApproved}</td>
                  <td>{request.number_of_tickets}</td>
                  <td>{request.game_date}</td>
                  <td>{request.entry_time}</td>
                  <td>{request.date_requested}</td>
                </tr>
          ))
        }
        </tbody>
      </table>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Employee Page</p>
      </header>
      <div>
        <div className="title">
          Welcome {userName}!
        </div>
        <div className="page-content">
          <div className="login-div">
            {user === '' && <div id="inputHint">Please enter your employee id</div>}
            {user === '' && <input type="text" id="inpt"/>}
            {user === '' && <button type="button" id="loginBtn" onClick={() => updateUser()}>login</button>}
            {user !== '' && <button type="button" id="logoutBtn" onClick={() => cleanUser()}>logout</button>}
          </div>
          <div className="ticket-table">
            <div className="ticket-info">
              {userName !== '' && <TicketBox />}
            </div>
            <br/>
            <div className="othe-requests">
              {userName !== '' && <OtherTicketBox />}
            </div>
          </div>
        </div>
      </div>
    </div>
      
  );
}

export default App;
