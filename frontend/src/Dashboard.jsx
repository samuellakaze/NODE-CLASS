import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    
  return (
    <div>
        <header className='bg-gray-900 p-5 text-center font-bold text-white'>STUDENT MANAGEMENT SYSTEM</header>
      <div className='flex flex-cols'>
        <aside className='bg-gray-700 w-50 h-screen'>
      <ul className='space-y-5 p-5 text-white font-bold'>
        <li><Link to="/dashboard">HOME</Link></li>
        <li><Link to="/all">ALL STUDENT</Link></li>
        <li><Link to="/add">ADD STUDENTS</Link></li>
      </ul>
      </aside>
      <main>

      </main>
      </div>
    </div>
  );
}
