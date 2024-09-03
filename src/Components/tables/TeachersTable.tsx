import React, { useState, useEffect } from 'react';
import { fetchTeachers } from '../../apiService';
import { Ring } from '@uiball/loaders';  // Importing the loader
import '../UserTable.css';


interface Teacher {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  profilePicture: string;
}

const TeachersTable: React.FC = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadTeachers = async () => {
      try {
        const data = await fetchTeachers();
        setTeachers(data);
      } catch (error) {
        console.error('Error fetching teachers:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTeachers();
  }, []);

  const handleAdd = () => {
    const newTeacher: Teacher = {
      id: teachers.length + 1,
      fullName: 'New Teacher',
      email: 'new.teacher@example.com',
      phoneNumber: '000-000-0000',
      gender: 'Other',
      profilePicture: 'https://via.placeholder.com/40',
    };
    setTeachers([...teachers, newTeacher]);
  };

  const handleDelete = (index: number) => {
    setTeachers(teachers.filter((_, i) => i !== index));
  };

  const handleDuplicate = (index: number) => {
    const teacherToDuplicate = teachers[index];
    const duplicatedTeacher = { ...teacherToDuplicate, id: teachers.length + 1, fullName: `${teacherToDuplicate.fullName} (Copy)` };
    setTeachers([...teachers, duplicatedTeacher]);
  };

  const handleEdit = (index: number) => {
    const editedTeachers = [...teachers];
    editedTeachers[index] = { ...editedTeachers[index], fullName: `${editedTeachers[index].fullName} (Edited)` };
    setTeachers(editedTeachers);
  };

  return (
    <div className="table-container">
      <div className="name">Teachers</div>
      <input type="text" placeholder="Search (ctrl + '/' to focus)" className="search-input" />
      <div className="button-group">
        <button className="action-button" onClick={handleAdd}>Add</button>
       {/* <button className="action-button" onClick={() => handleDelete(teachers.length - 1)}>Delete</button>
        <button className="action-button" onClick={() => handleDuplicate(teachers.length - 1)}>Duplicate</button>
  <button className="action-button" onClick={() => handleEdit(teachers.length - 1)}>Edit</button>*/}
      </div>

      {loading ? (
        <div className="loading">
          <Ring size={40} lineWeight={5} speed={2} color="black" />
        </div>
      ) : (
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
            {teachers.map((teacher) => (
              <tr key={teacher.id}>
                <td>
                  <img src={teacher.profilePicture} alt={teacher.fullName} className="user-image" />
                  <span>{teacher.fullName}</span><br />
                  <span>{teacher.email}</span>
                </td>
                <td>{teacher.email}</td>
                <td>{teacher.phoneNumber}</td>
                <td>{teacher.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TeachersTable;
