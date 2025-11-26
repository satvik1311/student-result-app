import React, { useState } from 'react';

const StudentForm = ({ student, onSave, onCancel }) => {
  const [name, setName] = useState(student?.name || '');
  const [section, setSection] = useState(student?.section || '');
  const [marks, setMarks] = useState(student?.marks || '');
  const [grade, setGrade] = useState(student?.grade || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, section, marks: Number(marks), grade });
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto' }}>
      <h2>{student ? 'Edit Student' : 'Add New Student'}</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>Name: </label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Section: </label><br />
          <input
            type="text"
            value={section}
            onChange={(e) => setSection(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Marks: </label><br />
          <input
            type="number"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Grade: </label><br />
          <input
            type="text"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <button type="submit" style={{ padding: '10px 20px', marginRight: '10px' }}>
          Save Student
        </button>
        <button type="button" onClick={onCancel} style={{ padding: '10px 20px' }}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default StudentForm;