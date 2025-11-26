// src/components/StudentList.jsx
import React from 'react';

const StudentList = ({ students, onEdit, onDelete }) => {
  if (students.length === 0) {
    return <div className="empty-state">No students found. Add a new student to get started.</div>;
  }

  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>NAME</th>
          <th>SECTION</th>
          <th>MARKS</th>
          <th>GRADE</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {students.map(s => (
          <tr key={s.id}>
            <td>{s.name}</td>
            <td>{s.section}</td>
            <td>{s.marks}</td>
            <td>{s.grade}</td>
            <td>
              <button className="action-btn edit-btn" onClick={() => onEdit(s)}>Edit</button>
              <button className="action-btn delete-btn" onClick={() => onDelete(s.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentList;