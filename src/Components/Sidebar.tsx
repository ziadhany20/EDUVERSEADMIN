import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUser, FaUsers, FaLayerGroup, FaClipboardList, FaCalendarCheck } from 'react-icons/fa'; // Import icons
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h2>EDU-VERSE</h2>
      </div>
      <ul className="sidebar-menu">
        <li className={`menu-item ${location.pathname === '/teachers' ? 'active' : ''}`}>
          <Link to="/teachers">
            <FaUser className="menu-icon" /> Teachers
          </Link>
        </li>
        <li className={`menu-item ${location.pathname === '/students' ? 'active' : ''}`}>
          <Link to="/students">
            <FaUsers className="menu-icon" /> Students
          </Link>
        </li>
        <li className={`menu-item ${location.pathname === '/groups' ? 'active' : ''}`}>
          <Link to="/groups">
            <FaLayerGroup className="menu-icon" /> Groups
          </Link>
        </li>
        <li className={`menu-item ${location.pathname === '/exams' ? 'active' : ''}`}>
          <Link to="/exams">
            <FaClipboardList className="menu-icon" /> Exams
          </Link>
        </li>
        <li className={`menu-item ${location.pathname === '/scheduled-exams' ? 'active' : ''}`}>
          <Link to="/scheduled-exams">
            <FaCalendarCheck className="menu-icon" /> Scheduled Exams 
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
