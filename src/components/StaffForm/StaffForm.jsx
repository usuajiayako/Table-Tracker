import React, { useContext, useState } from 'react';
import './StaffForm.scss';
import { StaffContext } from '../../context/StaffContext';
import { AuthContext } from '../../context/AuthContext';

function StaffForm() {
  const { addNewStaff } = useContext(StaffContext);
  const { signup } = useContext(AuthContext);

  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [staffRole, setStaffRole] = useState('Staff');

  const submitStaffForm = (event) => {
    event.preventDefault();
    const staffInfo = {
      firstName: firstName,
      surname: surname,
      email: email,
      password: password,
      staffRole: staffRole,
    };

    addNewStaff(staffInfo);
    signup(email, password);
  };

  return (
    <form onSubmit={submitStaffForm} className="staff-form">
      <label>
        First name
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </label>
      <label>
        Surname
        <input
          type="text"
          name="surname"
          value={surname}
          onChange={(event) => setSurname(event.target.value)}
        />
      </label>
      <label>
        Email address
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <label>
        Staff role
        <select
          name="staffRole"
          value={staffRole}
          onChange={(event) => setStaffRole(event.target.value)}
        >
          <option>Admin</option>
          <option>Staff</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default StaffForm;
