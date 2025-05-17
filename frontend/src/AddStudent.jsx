import React from 'react';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';

export default function AddStudent() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [classe, setClasse] = useState('');
    async function HandleStudent() {
        const response = await axios.post('http://localhost:3000/insert', {
            name,
            age,
            classe
        });
        console.log(response);
    }
  return (
    <div>
        <header className='bg-gray-900 p-5 text-center font-bold text-white'>STUDENT MANAGEMENT STUDENT</header>
      <div className='flex flex-cols'>
        <aside className='bg-gray-700 w-50 h-screen'>
      <ul className='space-y-5 p-5 text-white font-bold'>
        <li><Link to="/dashboard">HOME</Link></li>
        <li><Link to="/all">ALL STUDENT</Link></li>
        <li><Link to="/add">ADD STUDENTS</Link></li>
      </ul>
      </aside>
      <main>
<h1 className=' font-bold text-2xl relative top-10 left-100'>ENTER STUDENT</h1>
      <form onSubmit={(e)=>{e.preventDefault(),HandleStudent()}} className='grid bg-white space-y-2 p-5 relative top-15 left-50 w-150 shadow-lg rounded-lg border-2 border-gray-200'>
         <label htmlFor=""className='font-bold'>NAME</label>
        <input type="text" onChange={(e)=>setName(e.target.value)} value={name} placeholder='Enter your Name'className='border-2 p-2 border-gray-200 rounded-xl'/>
        <label htmlFor=""className='font-bold'>PASSWORD</label>
        <input type="number" onChange={(e)=>setAge(e.target.value)} value={age} placeholder='Enter your Age'className='border-2 p-2 border-gray-200 rounded-xl' />
        <label htmlFor=""className='font-bold'>CLASS</label>
        <input type="text" onChange={(e)=>setClasse(e.target.value)} value={classe} placeholder='Enter your class'className='border-2 p-2 border-gray-200 rounded-xl' />
        <div className='flex justify-center'>
          <button type='submit'  className='bg-blue-500 w-50 p-1 flex justify-center font-bold text-white'>SAVE</button>
           </div>
        
      </form>
      </main>
      </div>
    </div>
  );
}
