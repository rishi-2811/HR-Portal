
# 🏢 HR Portal

## Deployed Link:-
https://bluebirdhr.vercel.app/

## Overview
The **HR Portal** is an advanced, user-friendly web application designed to streamline human resources operations by bridging communication between HR personnel and employees. With a focus on automation and centralized task management, the platform aims to replace manual processes with digital efficiency, enhancing productivity and minimizing paperwork.

## ✨ Features

### 1. Employee Data Management
- Securely add, edit, and delete employee information.
- Efficient search and view functionalities for quick access to records.
- Role-based access to protect sensitive employee data.

### 2. Applicant Management
- Seamless applicant data capture and management.
- Schedule and manage interviews with ease.
- Streamlined hiring process for better decision-making.

### 3. Relocation Requests
- Submit and track relocation requests.
- HR personnel can approve or reject requests with a simple interface.
- Automated notifications for request updates.

### 4. Leave Management
- Employees can apply for leaves digitally.
- HR approval workflow for leave requests.
- Real-time status updates on leave applications.

### 5. Complaint Handling
- Anonymous and secure submission of employee complaints.
- Efficient complaint management system to resolve issues promptly.
- Dashboard for HR to monitor and address concerns.

### 6. User Management (HR)
- Secure authentication for HR personnel using JWT tokens.
- Role-based access for managing employees and applicants.
- Profile management for updating HR personnel data.

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js, JWT for authentication
- **Frontend**: React, HTML, CSS, JavaScript
- **Database**: MongoDB for storing employee and applicant records
- **Authentication**: JSON Web Tokens (JWT)
- **Other**: REST APIs for handling communication between the frontend and backend

## 🗂 Project Structure

```plaintext
├── backend/                # Server-side code
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   └── controllers/        # Business logic
├── frontend/               # Client-side code (React)
│   ├── components/         # Reusable components
│   └── pages/              # Main pages (Dashboard, Forms, etc.)
├── public/                 # Public assets (images, icons, etc.)
└── README.md               # Project documentation
```

## 🚀 Setup & Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/hr-portal.git
   cd hr-portal
   ```

2. **Backend Setup**:
   - Navigate to the `backend` directory and install dependencies:
     ```bash
     cd backend
     npm install
     ```
   - Set up environment variables:
     ```bash
     cp .env.example .env
     ```
   - Start the backend server:
     ```bash
     npm start
     ```

3. **Frontend Setup**:
   - Navigate to the `frontend` directory and install dependencies:
     ```bash
     cd frontend
     npm install
     ```
   - Start the development server:
     ```bash
     npm start
     ```

4. **Database Setup**:
   - Ensure MongoDB is installed and running.
   - Connect the app to your MongoDB instance by updating the `.env` file with your MongoDB URI.

## 🎯 Future Enhancements

- Integration with payroll systems.
- Advanced analytics dashboard for HR to track employee performance.
- Multi-language support for a global workforce.

## 🛡 Security Considerations

- JWT-based authentication for secure user sessions.
- Data validation and sanitization to prevent XSS and SQL injection attacks.
- Role-based access controls to protect sensitive HR data.
