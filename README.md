Student Result Management System
Live Demo → https://student-result-app-satvik1311.vercel.app
GitHub Repository → https://github.com/satvik1311/student-result-app

Project Overview
A modern, responsive Student Result Management System built with React + Vite, featuring full CRUD operations using JSON Server as a mock backend.
Students can be added, viewed, edited, and deleted with a beautiful, professional UI inspired by modern admin dashboards.

Features

Add New Student (Modal Form)
Edit Student (Pre-filled modal)
Delete Student (with confirmation)
Load All Students (Manual fetch – as per requirement)
View Student Details in clean table format
Responsive & Mobile-Friendly Design
Modern Glassmorphism + Gradient UI
No useEffect used (as instructed – data loads only on button click)


Tech Stack

































TechnologyPurposeReact + ViteFrontend FrameworkJavaScript (ES6)Logic & State ManagementJSON ServerMock REST API (db.json)Fetch APICRUD OperationsCSS3Custom Styling & AnimationsVercelDeployment

Folder Structure
textstudent-result-app/
├── db.json                  → JSON Server database
├── src/
│   ├── components/
│   │   ├── StudentList.jsx
│   │   ├── StudentForm.jsx
│   │   └── StudentDetails.jsx (optional)
│   ├── services/
│   │   └── studentService.js → API calls
│   ├── App.jsx              → Main logic & routing
│   └── main.jsx
├── public/
└── package.json

How to Run Locally
1. Clone the repository
Bashgit clone https://github.com/satvik1311/student-result-app.git
cd student-result-app
2. Install dependencies
Bashnpm install
3. Start JSON Server (in one terminal)
Bashnpx json-server --watch db.json --port 3001
4. Start React App (in another terminal)
Bashnpm run dev
Open http://localhost:5173 → Your app is running!

JSON Server Database (db.json)
JSON{
  "students": []
}
All data is stored here. Add students → they appear instantly after clicking Load All Students.

Screenshots
App Preview
Modal Form

Future Enhancements (Optional)

Search & Filter Students
Sort by Marks/Name
Pagination
Form Validation
Export to Excel/PDF
Dark Mode Toggle


Made with Love by
Satvik Gaur
React Developer | Full-Stack Enthusiast
