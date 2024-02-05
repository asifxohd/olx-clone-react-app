import React, { useContext, useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { IoMdArrowRoundBack } from "react-icons/io";
import logo from '../assets/OLX-logo.png';
import '../Login/Login.css'
import { useNavigate } from 'react-router-dom';
import Cutombackbutton from '../Cutombackbutton';
import { FirebaseContext } from '../store/FirebaseContext';


function Signup() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { firebase } = useContext(FirebaseContext)
    const auth = getAuth(firebase);
    const db = getFirestore(firebase);



    const handleSubmit = (e) => {
        e.preventDefault();
        
      
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
      
            const userRef = doc(db, 'users', user.uid);
            setDoc(userRef, {
              username,
              email,
            })
              .then(() => {
                console.log('User info added to Firestore successfully');
                navigate('/login');
              })
              .catch((error) => {
                console.error('Error adding user info to Firestore:', error);
              });
          })
          .catch((error) => {
            console.error('Error creating user:', error);
          });
      };

    return (
        <>
            <div className='w-full h-lvh bg-gray-200 flex items-center justify-center'><div className='lg:w-[35%] drop-shadow-lg w-[100%] h-[570px] rounded-md bg-white border'>
                <div className='w-full cursor-pointer' onClick={() => Cutombackbutton()}><IoMdArrowRoundBack size={25} className='mt-4 ml-4' /></div>
                <div className='w-full mt-7 flex items-center justify-center'>
                    <img className='w-[70px]' src={logo} alt="" />
                </div>
                <div className='w-full mt-9 mb-10 font-bold flex items-center justify-center'>
                    <span>Create Account</span>
                </div>
                <div className='w-full mt-3 flex items-center justify-center'>
                    <input className='border-2  backgoundgreenlogin' value={username} placeholder='Username' onChange={(e) => setUsername(e.target.value)}></input>
                </div>
                <div className='w-full mt-3 flex items-center justify-center'>
                    <input type='email' className='border-2  backgoundgreenlogin' value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className='w-full mt-3 flex items-center justify-center'>
                    <input type='password' className='border-2  backgoundgreenlogin' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div className='w-full mt-7 font-bold text-white flex items-center justify-center'>
                    <button className='border-2  backgoundgreenbutton' onClick={(e) => handleSubmit(e)} >Create</button>
                </div>
                <div className='w-full mt-7 text-xs font-semibold flex items-center justify-center'>
                    <a className='border-2 create cursor-pointer' onClick={() => navigate('/login')}>Login with account</a>
                </div>

            </div></div>
        </>
    )
}

export default Signup