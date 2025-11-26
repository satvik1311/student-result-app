import React from 'react';

const StudentDetails = ({ student, onBack }) => {
  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px', border: '2px solid #333' }}>
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Section:</strong> {student.section}</p>
      <p><strong>Marks:</strong> {student.marks}</p>
      <p><strong>Grade:</strong> {student.grade}</p>
      <button onClick={onBack} style={{ padding: '10px 20px', marginTop: '20px' }}>
        Back to List
      </button>
    </div>
  );
};

export default StudentDetails;