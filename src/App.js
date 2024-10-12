import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Login } from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import Employee from "./pages/employee/employee";
import Candidates from "./pages/candidates/candidate";
import Relocation from "./pages/reloc/reloc";
import Complaint from "./pages/complaint/complaint";
import Leave from "./pages/leave/leave";
import Interview from "./pages/interview/interview";
import AddEmployee from "./pages/forms/addemployee";
import EditEmployee from "./pages/forms/editemployee";
import ScheduleInterview from "./pages/forms/interview";
import {PrivateRoute} from "./components/private";
import SearchResults from "./pages/employee/searchresults";
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route
          path="/"
          element={
            <PrivateRoute >
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/employee"
          element={
            <PrivateRoute >
              <Employee />
            </PrivateRoute>
          }
        />
        <Route
          path="/candidate"
          element={
            <PrivateRoute >
              <Candidates />
            </PrivateRoute>
          }
        />
        <Route
          path="/reloc"
          element={
            <PrivateRoute >
              <Relocation />
            </PrivateRoute>
          }
        />
        <Route
          path="/complaint"
          element={
            <PrivateRoute >
              <Complaint />
            </PrivateRoute>
          }
        />
        <Route
          path="/leave"
          element={
            <PrivateRoute >
              <Leave />
            </PrivateRoute>
          }
        />
        <Route
          path="/interview"
          element={
            <PrivateRoute >
              <Interview />
            </PrivateRoute>
          }
        />
        <Route
          path="/addemployee"
          element={
            <PrivateRoute >
              <AddEmployee />
            </PrivateRoute>
          }
        />
        <Route
          path="/editemployee"
          element={
            <PrivateRoute >
              <EditEmployee />
            </PrivateRoute>
          }
        />
        <Route
          path="/scheduleinterview"
          element={
            <PrivateRoute >
              <ScheduleInterview />
            </PrivateRoute>
          }
        />
        <Route
          path="/searchresults"
          element={
            <PrivateRoute >
              <SearchResults />
            </PrivateRoute>
          }
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
