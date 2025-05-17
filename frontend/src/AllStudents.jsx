import React from 'react';
import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';  
export default function AllStudents() {
    const [students, setStudents] = useState([]);

  async function getAllStudents() {
    const response=await axios.get('http://localhost:3000/students')
  console.log(response)
  setStudents(response.data);
  }
useEffect(function(){
getAllStudents();
},[])

async function HandleDelete() {
  const res=await axios.delete(`http://localhost:3000/delete`);
console.log(res)
getAllStudents();
 
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
        <h1 className='font-bold text-2xl relative top-10 left-100 text-gray-700'>ALL STUDENTS</h1>
        <div>
          <table className='w-150 relative top-15 left-50 shadow-xl'>
            <thead className='border-2 border-white '>
              <tr>
              <th>ID</th>
              <th>NAMES</th>
              <th>AGE</th>
              <th>CLASS</th>
              <th>ACTIONS</th>
              </tr>
            </thead>
           <tbody>
              {students.map(items=>{
                return <tr key={items.id} className='border-2 border-white dark:odd:bg-gray-200 dark:even:bg-blue-200'>
                  <td className='p-4 text-center'>{items.id}</td>
                  <td className='p-4 text-center'>{items.name}</td>
                  <td className='p-4 text-center'>{items.age}</td>
                  <td className='p-4 text-center'>{items.classe}</td>
                  <td className='p-4 text-center'> 
                    <button type='submit' className='bg-blue-400 p-1 rounde'onClick={()=>HandleDelete(items.id)}>DELETE</button>
                    </td> 
                </tr>
                
              })}
          </tbody>
          </table>
        </div>
      </main>
     </div>
    </div>
  
  );
}
