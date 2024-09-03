import React, { useState, useEffect } from 'react';
import '../UserTable.css';

interface Exam {
  id: number;
  subject: string;
  date: string;
}

const ExamsTable: React.FC = () => {
  const [exams, setExams] = useState<Exam[]>([]);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await fetch('https://api.example.com/exams');
        const data = await response.json();
        setExams(data);
      } catch (error) {
        console.error('Error fetching exams:', error);
      }
    };

    fetchExams();
  }, []);

  const handleAdd = () => {
    const newExam: Exam = {
      id: exams.length + 1,
      subject: 'New Subject',
      date: 'YYYY-MM-DD',
    };
    setExams([...exams, newExam]);
  };

  const handleDelete = (index: number) => {
    setExams(exams.filter((_, i) => i !== index));
  };

  const handleDuplicate = (index: number) => {
    const examToDuplicate = exams[index];
    const duplicatedExam = { ...examToDuplicate, id: exams.length + 1, subject: `${examToDuplicate.subject} (Copy)` };
    setExams([...exams, duplicatedExam]);
  };

  const handleEdit = (index: number) => {
    const editedExams = [...exams];
    editedExams[index] = { ...editedExams[index], subject: `${editedExams[index].subject} (Edited)` };
    setExams(editedExams);
  };

  return (
    <div className="table-container">
      <div className="name">Exams</div>
      <input type="text" placeholder="Search (ctrl + '/' to focus)" className="search-input" />
      <div className="button-group">
        <button className="action-button" onClick={handleAdd}>Add</button>
       {/* <button className="action-button" onClick={() => handleDelete(teachers.length - 1)}>Delete</button>
        <button className="action-button" onClick={() => handleDuplicate(teachers.length - 1)}>Duplicate</button>
  <button className="action-button" onClick={() => handleEdit(teachers.length - 1)}>Edit</button>*/}
      </div>
      <table className="user-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {exams.map((exam, index) => (
            <tr key={exam.id}>
              <td>{exam.subject}</td>
              <td>{exam.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExamsTable;
