//@ts-check

import React from "react";


/** @typedef {import("./UserForm").UserInformation} UserInformation */

/**
 * @typedef {Object} UserListProps
 * @property {UserInformation[]} users
 */

/** 
 * @param {UserListProps} props
 * @returns {React.JSX.Element}
 */
function UserList(props) {
  const renderedUsers = props.users.map((user) => {
    return (
      <tr key={user.name}>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody data-testid="usersTable">{renderedUsers}</tbody>
    </table>
  );
}

export default UserList;
