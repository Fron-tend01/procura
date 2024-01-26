import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootPage from './pages/RootPage';
// Redux
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<RootPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
