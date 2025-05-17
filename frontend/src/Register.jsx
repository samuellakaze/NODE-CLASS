import React from 'react';
import {useState}from 'react';
import axios from 'axios';
import {Link,useNavigate } from 'react-router-dom';

export default function Register() {
const[fullnames,setNames]=useState('');
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
const navigate=useNavigate();
async function HandleRegister(){
    const response=await axios.post('http://localhost:3000/register',{
        fullnames,
        email,
        password

    });
    console.log(response)
    navigate('/login')
}
  return (
    <div className='bg-blue-200 h-screen'>
     <h1 className='text-center font-bold text-2xl relative top-10'>REGISTER</h1>
      <form onSubmit={(e)=>{e.preventDefault(),HandleRegister()}} className='grid bg-white space-y-2 p-5 relative top-15 left-90 w-150 shadow-lg rounded-lg'>
        <label htmlFor=""className='font-bold'>FULLNAME</label>
        <input type="text" onChange={(e)=>setNames(e.target.value)} value={fullnames} placeholder='Enter your fullNames' className='border-2 border-gray-200 p-2 rounded-xl'/>
        <label htmlFor=""className='font-bold'>EMAIL</label>
         <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Enter your Email'className='border-2 p-2 border-gray-200 rounded-xl'/>
         <label htmlFor=""className='font-bold'>PASSWORD</label>
          <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='Enter your Password'className='border-2 p-2 border-gray-200 rounded-xl'/>
          <div className='flex justify-center'>
          <button type='submit' className='bg-blue-500 w-50 p-1 flex justify-center font-bold text-white'>REGISTER</button>
           </div>
           <p className='text-center'>Already Have an Account ? &nbsp;<Link to='/login' className='text-blue-500'>Login</Link> </p>
      </form>
      </div>
    
  );
}
