import React, { useState } from 'react';
import './UserTable.css';

interface User {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  profilePicture: string;
}

interface UserTableProps {
  title: string;
}

const UserTable: React.FC<UserTableProps> = ({ title }) => {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      phoneNumber: '123-456-7890',
      gender: 'Male',
      profilePicture: 'https://via.placeholder.com/40',
    },
    {
      id: 2,
      fullName: 'Jane Smith',
      email: 'jane.smith@example.com',
      phoneNumber: '987-654-3210',
      gender: 'Female',
      profilePicture: 'https://via.placeholder.com/40',
    },
  ]);

  const handleAdd = () => {
    const newUser: User = {
      id: users.length + 1,
      fullName: 'New User',
      email: 'new.user@example.com',
      phoneNumber: '000-000-0000',
      gender: 'Other',
      profilePicture: 'https://via.placeholder.com/40',
    };
    setUsers([...users, newUser]);
  };

  const handleDelete = (index: number) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  const handleDuplicate = (index: number) => {
    const userToDuplicate = users[index];
    const duplicatedUser = { ...userToDuplicate, id: users.length + 1, fullName: `${userToDuplicate.fullName} (Copy)` };
    setUsers([...users, duplicatedUser]);
  };

  const handleEdit = (index: number) => {
    const editedUsers = [...users];
    editedUsers[index] = { ...editedUsers[index], fullName: `${editedUsers[index].fullName} (Edited)` };
    setUsers(editedUsers);
  };

  return (
    <div className="table-container">
      <div className="name">{title}</div>
      <input type="text" placeholder="Search (ctrl + '/' to focus)" className="search-input" />
      <div className="button-group">
        <button className="action-button" onClick={handleAdd}>Add</button>
        <button className="action-button" onClick={() => handleDelete(users.length - 1)}>Delete</button>
        <button className="action-button" onClick={() => handleDuplicate(users.length - 1)}>Duplicate</button>
        <button className="action-button" onClick={() => handleEdit(users.length - 1)}>Edit</button>
      </div>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>
                <img src={user.profilePicture} alt={user.fullName} className="user-image" />
                <span>{user.fullName}</span><br />
                <span>{user.email}</span>
              </td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
