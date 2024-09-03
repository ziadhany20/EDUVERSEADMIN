import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TeachersTable from './Components/tables/TeachersTable';
import StudentsTable from './Components/tables/StudentsTable';
import GroupsTable from './Components/tables/GroupsTable';
import ExamsTable from './Components/tables/ExamsTable';
import ScheduledExamsTable from './Components/tables/ScheduledExamsTable';
import './App.css';
import Login from './Components/Login';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './ProtectedRoute';


const App: React.FC = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/teachers" element={<ProtectedRoute element={<TeachersTable />} />} />
        <Route path="/students" element={<ProtectedRoute element={<StudentsTable />} />} />
        <Route path="/groups" element={<ProtectedRoute element={<GroupsTable />} />} />
        <Route path="/exams" element={<ProtectedRoute element={<ExamsTable />} />} />
        <Route path="/scheduled-exams" element={<ProtectedRoute element={<ScheduledExamsTable />} />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
