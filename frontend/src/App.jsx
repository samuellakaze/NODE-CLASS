import React from 'react';
import Register from './Register.jsx'
import Login from './Login.jsx';
import Dashboard from './Dashboard.jsx';
import AllStudents from './AllStudents.jsx';
import AddStudent from './AddStudent.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
       <Route path='/all' element={<AllStudents/>}/>
        <Route path='/add' element={<AddStudent/>}/>
      
    </Routes>
    </BrowserRouter>
    </div>
  );
}
