import React, { useState, useEffect } from 'react';
import { Ring } from '@uiball/loaders';  // Import the loader
import '../UserTable.css';

interface Student {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  profilePicture: string;
}

const StudentsTable: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);  // Loading state

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('https://api.example.com/students');
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error('Error fetching students:', error);
      } finally {
        setLoading(false);  // Stop loading when data is fetched
      }
    };

    fetchStudents();
  }, []);

  const handleAdd = () => {
    const newStudent: Student = {
      id: students.length + 1,
      fullName: 'New Student',
      email: 'new.student@example.com',
      phoneNumber: '000-000-0000',
      gender: 'Other',
      profilePicture: 'https://via.placeholder.com/40',
    };
    setStudents([...students, newStudent]);
  };

  const handleDelete = (index: number) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  const handleDuplicate = (index: number) => {
    const studentToDuplicate = students[index];
    const duplicatedStudent = { ...studentToDuplicate, id: students.length + 1, fullName: `${studentToDuplicate.fullName} (Copy)` };
    setStudents([...students, duplicatedStudent]);
  };

  const handleEdit = (index: number) => {
    const editedStudents = [...students];
    editedStudents[index] = { ...editedStudents[index], fullName: `${editedStudents[index].fullName} (Edited)` };
    setStudents(editedStudents);
  };

  return (
    <div className="table-container">
      <div className="name">Students</div>
      <input type="text" placeholder="Search (ctrl + '/' to focus)" className="search-input" />
      <div className="button-group">
        <button className="action-button" onClick={handleAdd}>Add</button>
        {/* <button className="action-button" onClick={() => handleDelete(teachers.length - 1)}>Delete</button>
        <button className="action-button" onClick={() => handleDuplicate(teachers.length - 1)}>Duplicate</button>
  <button className="action-button" onClick={() => handleEdit(teachers.length - 1)}>Edit</button>*/}
      </div>

      {loading ? (
        <div className="loading">
          <Ring size={40} lineWeight={5} speed={2} color="black" />  {/* Loader component */}
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
            {students.map((student, index) => (
              <tr key={student.id}>
                <td>
                  <img src={student.profilePicture} alt={student.fullName} className="user-image" />
                  <span>{student.fullName}</span><br />
                  <span>{student.email}</span>
                </td>
                <td>{student.email}</td>
                <td>{student.phoneNumber}</td>
                <td>{student.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentsTable;
