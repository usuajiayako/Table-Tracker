import React, { useContext, useState } from 'react';
import './StaffForm.scss';
import { StaffContext } from '../../context/StaffContext';
import { AuthContext } from '../../context/AuthContext';

function StaffForm() {
  const { addUser } = useContext(StaffContext);
  const { signup } = useContext(AuthContext);

  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [staffRole, setStaffRole] = useState('Staff');

  const submitStaffForm = (event) => {
    event.preventDefault();
    const staffInfo = {
      first_name: firstName,
      last_name: surname,
      email: email,
      password: password,
      role: staffRole,
    };

    addUser(staffInfo);
    signup(email, password);
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={submitStaffForm} className="staff-form">
        <label className="un">
          First name
          <br />
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
        <label className="un">
          Surname
          <br />
          <input
            type="text"
            name="surname"
            value={surname}
            onChange={(event) => setSurname(event.target.value)}
          />
        </label>
        <label className="un">
          Email address
          <br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label className="pass">
          Password
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <label className="un">
          Staff role
          <br />
          <select
            name="staffRole"
            value={staffRole}
            onChange={(event) => setStaffRole(event.target.value)}
          >
            <option>Admin</option>
            <option>Staff</option>
          </select>
        </label>
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default StaffForm;
