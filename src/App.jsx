// App.js
import React from 'react';
import {
  Route,
  Routes
} from 'react-router-dom';
import HomeScreen from './HomeScreen';
import './App.css';
const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/"
          element={<HomeScreen
            defaultVideoUrl=''
          />} />
      </Routes>
    </div>
  );
};
export default App;
