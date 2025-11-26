// src/App.jsx
import React, { useState } from 'react';
import StudentList from './components/StudentList.jsx';
import StudentForm from './components/StudentForm.jsx';
import { getStudents, addStudent, updateStudent, deleteStudent } from './services/studentService.js';

function App() {
  const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const loadStudents = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  const openAddModal = () => {
    setCurrentStudent(null);
    setIsEdit(false);
    setShowModal(true);
  };

  const openEditModal = (student) => {
    setCurrentStudent(student);
    setIsEdit(true);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handleSave = async (studentData) => {
    if (isEdit) {
      await updateStudent(currentStudent.id, studentData);
    } else {
      await addStudent(studentData);
    }
    closeModal();
    loadStudents();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this student?")) {
      await deleteStudent(id);
      loadStudents();
    }
  };

  return (
    <>
      {/* Header */}
      <div className="header">
        <h1>Student Result Management System</h1>
        <p>Manage students, sections, and academic results</p>
      </div>

      {/* Main Card with Navbar */}
      <div className="main-container">
        <div className="navbar">
          <div className="nav-left">
            <span className="active">Students</span>
            <span>Sections</span>
            <span>Results</span>
          </div>
          <button className="add-btn" onClick={openAddModal}>
            Add New Student
          </button>
        </div>

        <div className="content">
          <h2>Student Management</h2>
          <button className="load-btn" onClick={loadStudents}>
            Load All Students
          </button>

          <StudentList 
            students={students} 
            onEdit={openEditModal}
            onDelete={handleDelete}
          />
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>{isEdit ? 'Edit Student' : 'Add New Student'}</h2>
            <StudentForm 
              student={currentStudent}
              onSave={handleSave}
              onCancel={closeModal}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;