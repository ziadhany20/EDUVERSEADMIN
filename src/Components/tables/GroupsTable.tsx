import React, { useState, useEffect } from 'react';
import '../UserTable.css';
import { Ring } from '@uiball/loaders';


interface Group {
  id: number;
  name: string;
  description: string;
}

const GroupsTable: React.FC = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await fetch('https://api.example.com/groups');
        const data = await response.json();
        setGroups(data);
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    };

    fetchGroups();
  }, []);

  const handleAdd = () => {
    const newGroup: Group = {
      id: groups.length + 1,
      name: 'New Group',
      description: 'New Description',
    };
    setGroups([...groups, newGroup]);
  };

  const handleDelete = (index: number) => {
    setGroups(groups.filter((_, i) => i !== index));
  };

  const handleDuplicate = (index: number) => {
    const groupToDuplicate = groups[index];
    const duplicatedGroup = { ...groupToDuplicate, id: groups.length + 1, name: `${groupToDuplicate.name} (Copy)` };
    setGroups([...groups, duplicatedGroup]);
  };

  const handleEdit = (index: number) => {
    const editedGroups = [...groups];
    editedGroups[index] = { ...editedGroups[index], name: `${editedGroups[index].name} (Edited)` };
    setGroups(editedGroups);
  };

  return (
    <div className="table-container">
      <div className="name">Groups</div>
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
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group, index) => (
            <tr key={group.id}>
              <td>{group.name}</td>
              <td>{group.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GroupsTable;
