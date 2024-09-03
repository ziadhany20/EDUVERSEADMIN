import React, { useState, useEffect } from 'react';
import '../UserTable.css';

interface ScheduledExam {
  id: number;
  subject: string;
  date: string;
  isPro: boolean;
}

const ScheduledExamsTable: React.FC = () => {
  const [scheduledExams, setScheduledExams] = useState<ScheduledExam[]>([]);

  useEffect(() => {
    const fetchScheduledExams = async () => {
      try {
        const response = await fetch('https://api.example.com/scheduled-exams');
        const data = await response.json();
        setScheduledExams(data);
      } catch (error) {
        console.error('Error fetching scheduled exams:', error);
      }
    };

    fetchScheduledExams();
  }, []);

  const handleAdd = () => {
    const newExam: ScheduledExam = {
      id: scheduledExams.length + 1,
      subject: 'New Subject',
      date: 'YYYY-MM-DD',
      isPro: false,
    };
    setScheduledExams([...scheduledExams, newExam]);
  };

  const handleDelete = (index: number) => {
    setScheduledExams(scheduledExams.filter((_, i) => i !== index));
  };

  const handleDuplicate = (index: number) => {
    const examToDuplicate = scheduledExams[index];
    const duplicatedExam = { ...examToDuplicate, id: scheduledExams.length + 1, subject: `${examToDuplicate.subject} (Copy)` };
    setScheduledExams([...scheduledExams, duplicatedExam]);
  };

  const handleEdit = (index: number) => {
    const editedExams = [...scheduledExams];
    editedExams[index] = { ...editedExams[index], subject: `${editedExams[index].subject} (Edited)` };
    setScheduledExams(editedExams);
  };

  return (
    <div className="table-container">
      <div className="name">Scheduled Exams</div>
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
            <th>Pro</th>
          </tr>
        </thead>
        <tbody>
          {scheduledExams.map((exam, index) => (
            <tr key={exam.id}>
              <td>{exam.subject}</td>
              <td>{exam.date}</td>
              <td>{exam.isPro ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduledExamsTable;
