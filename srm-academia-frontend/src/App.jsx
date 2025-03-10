import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import './App.css';

function App() {
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));
  
  const handleLogin = (token) => {
    localStorage.setItem('authToken', token);
    setAuthToken(token);
  };
  
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setAuthToken(null);
  };
  
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            authToken ? 
              <Navigate to="/profile" /> : 
              <LoginPage onLogin={handleLogin} />
          } 
        />
        <Route 
          path="/profile" 
          element={
            authToken ? 
              <ProfilePage token={authToken} onLogout={handleLogout} /> : 
              <Navigate to="/" />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;