import React from 'react';

import Sidebar from './Layouts/Sidebar';
import Main from './Layouts/Main';
import ToDo from './Pages/Tasks';
import Notes from './Pages/Notes';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />

        <div style={{ marginLeft: '200px', padding: '20px', width: '100%' }}>
          <Routes>
            <Route path="/Main" element={<Main />} />
            <Route path="/ToDo" element={<ToDo />} />
            <Route path="/Notes" element={<Notes />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;