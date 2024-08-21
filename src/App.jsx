//@ts-check

import React, { useState } from 'react';
import UserList from './UserList';
import UserForm from './UserForm';

/** @typedef {import('./UserForm').UserInformation} UserInformation */

/**
  @template T
  *@typedef {Array<T | React.Dispatch<React.SetStateAction<T>>>} UseStateTuple
 */

/**
 * 
 * @returns {React.JSX.Element}
 */
function App() {
  /**
   * Default users on the first load
   * @type {UserInformation[]} 
  */
  const initialUser = [];

  /** @type {UseStateTuple<UserInformation[]>} */
  const [users, setUsers] = useState(initialUser);


  /** @param {UserInformation} userInformation */
  const onUserAdd = (userInformation) => {
    setUsers([...users, userInformation]);
  };

  return (
    <div>
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default App;
