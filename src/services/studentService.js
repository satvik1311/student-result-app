const API = 'http://localhost:3001/students';

export const getStudents = async () => {
  const res = await fetch(API);
  return res.json();
};

export const addStudent = async (student) => {
  await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student),
  });
};

export const updateStudent = async (id, student) => {
  await fetch(`${API}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student),
  });
};

export const deleteStudent = async (id) => {
  await fetch(`${API}/${id}`, { method: 'DELETE' });
};