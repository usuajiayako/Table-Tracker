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
  const [validFirstName, setValidFirstName] = useState(true);
  const [validLastName, setValidLastName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);

  const submitStaffForm = (event) => {
    event.preventDefault();
    const staffInfo = {
      first_name: firstName,
      last_name: surname,
      email: email,
      password: password,
      role: staffRole
    };

    addUser(staffInfo);
    signup(email, password);
  };

  const validateFirstName = (e) => {
    const firstName = e.target.value;
    const classList = e.target.classList;
    const regex = /^[a-z,.'-]+$/i;

    if (regex.test(firstName)) {
      classList.remove('invalid');
      classList.add('valid');
      setValidFirstName(true);
    } else {
      classList.remove('valid');
      classList.add('invalid');
      setValidFirstName(false);
    }
  };

  const validateLastName = (e) => {
    const lastName = e.target.value;
    const classList = e.target.classList;
    const regex = /^[a-z,.'-]+$/i;

    if (regex.test(lastName)) {
      classList.remove('invalid');
      classList.add('valid');
      setValidLastName(true);
    } else {
      classList.remove('valid');
      classList.add('invalid');
      setValidLastName(false);
    }
  };

  const validateEmail = (e) => {
    const email = e.target.value;
    const classList = e.target.classList;
    const regex = /^[^\s@]+@[^\s@]+$/;

    if (regex.test(email)) {
      classList.remove('invalid');
      classList.add('valid');
      setValidEmail(true);
    } else {
      classList.remove('valid');
      classList.add('invalid');
      setValidEmail(false);
    }
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
          onBlur={(e) => validateFirstName(e)}
        />
        <span className="required-message" hidden={validFirstName}>
          <br /> Allowed: (A-Z a-z ' , . -)
        </span>
      </label>
      <label>
        Surname
        <input
          type="text"
          name="surname"
          value={surname}
          onChange={(event) => setSurname(event.target.value)}
          onBlur={(e) => validateLastName(e)}
        />
        <span className="required-message" hidden={validLastName}>
          <br /> Allowed: (A-Z a-z ' , . -)
        </span>
      </label>
      <label>
        Email address
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          onBlur={(e) => validateEmail(e)}
        />
        <span className="required-message" hidden={validEmail}>
          <br /> Enter a valid email address. Baka
        </span>
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
