// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './Components/Auth/AuthContext'; 
import Sidebar from './Layouts/Sidebar';
import Main from './Layouts/Main';
import Pictures from './Pages/Album';
import Notes from './Pages/Notes';
import Calendar from './Pages/Calendar';
import SignIn from './Pages/Login';
import RequireSignIn from './Components/Auth/RequireSignIn'; 
import BackgroundMusic from './Components/Music/BackgroundMusic';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ marginLeft: '200px', padding: '20px', width: '100%' }}>
            <Routes>
              <Route path="/Main" element={<Main />} />
              <Route path="/Pictures" element={<RequireSignIn><Pictures /></RequireSignIn>} />
              <Route path="/Notes" element={<RequireSignIn><Notes /></RequireSignIn>} />
              <Route path="/Calendar" element={<Calendar />} />
              <Route path="/SignIn" element={<SignIn />} />
            </Routes>
          </div>
        </div>
        <BackgroundMusic />
      </Router>    
    </AuthProvider>
    
  );
}

export default App;


