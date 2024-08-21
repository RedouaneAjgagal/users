//@ts-check

import React, { useState } from 'react';

/**
 * @typedef {Object} UserInformation
 * @property {string} name
 * @property {string} email
 */

/**
 * @typedef {Object} UserFormProps
 * @property {(userInformation: UserInformation) => void} onUserAdd
 */

/**
 * @param {UserFormProps} props
 * @returns {React.JSX.Element}
 */
function UserForm(props) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onUserAdd({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button>Add User</button>
    </form>
  );
}

export default UserForm;
