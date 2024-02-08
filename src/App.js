import React from 'react';

import Sidebar from './Layouts/Sidebar';
import Main from './Layouts/Main';
import Pictures from './Pages/Album';
import Notes from './Pages/Notes';
import Calendar from './Pages/Calendar';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />

        <div style={{ marginLeft: '200px', padding: '20px', width: '100%' }}>
          <Routes>
            <Route path="/Main" element={<Main />} />
            <Route path="/Pictures" element={<Pictures />} />
            <Route path="/Notes" element={<Notes />} />
            <Route path="/Calendar" element={<Calendar />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;