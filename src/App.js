import Login from './components/LogIn';
import SignIn from './components/SignIn';
import Dashbord from './components/Dashbord';
import Complains from './components/Complains';
import './App.css';
import Leave from './components/Leave';
import Reallocation from './components/Reallocation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Candidates from './components/Candidates';
import Employee from './components/Employee';
import ProtectedRoute from './components/ProtectedRoute';
import InterviewScheduled from './components/InterviewScheduled';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Login />} />

        {/* Use ProtectedRoute with a valid component prop */}
        <ProtectedRoute path="/dashboard" component={Dashbord} />
        <ProtectedRoute path="/employee" component={Employee} />
        <ProtectedRoute path="/candidates" component={Candidates} />
        <ProtectedRoute path="/leave" component={Leave} />
        <ProtectedRoute path="/relocation" component={Reallocation} />
        <ProtectedRoute path="/complains" component={Complains} />
        <ProtectedRoute path="/interview_scheduled" component={InterviewScheduled} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
