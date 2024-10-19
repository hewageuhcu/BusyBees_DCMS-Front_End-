import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import BabyDetails from './pages/BabyDetails';
import StaffDetails from './pages/staffsDetails';
import GuardianDetails from './pages/GuardianDetails';
import ScheduleDetails from './pages/ScheduleDetails';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import './App.css';
import GuardianDetails from './pages/GuardianDetails';
import ClassroomDetails from './pages/ClassroomDetails';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Router>
      <CssBaseline />
      {isLoggedIn ? (
        <>
          <Header />
          <Box sx={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar />
            <Box
              component="main"
              sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, mt: 8 }}
            >
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/babyDetails" element={<BabyDetails />} />
                <Route path='/guardianDetails' element={<GuardianDetails/>}/>
                <Route path='/classroomDetails' element={<ClassroomDetails/>}/>
                <Route path="/babySitterDetails" element={<BabySitterDetails />} />
                <Route path="*" element={<Navigate to="/dashboard" />} />
              </Routes>
            </Box>
          </Box>
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
