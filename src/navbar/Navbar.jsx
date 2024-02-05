import React, { useContext, useState } from 'react';
import logo from '../assets/OLX-logo.png';
import { IoIosArrowDown } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';
import { IoSearch } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa6';
import './Navbar.css';
import { AuthContext, FirebaseContext } from '../store/FirebaseContext';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { HiOutlineLogout } from "react-icons/hi";



function Navbar() {
	const navigate = useNavigate()
	const [name, setName] = useState('')
	const { firebase } = useContext(FirebaseContext)
	const auth = getAuth(firebase)
	const db = getFirestore(firebase)
	const { main,setMain }= useContext(AuthContext)



	onAuthStateChanged(auth, async (user) => {
		if (user) {
			const uid = user.uid;
			const docref = await getDoc(doc(db, 'users', uid))
			const name = docref.data().username
			setName(name)
			setMain(user)
		} else {
			console.log('no user')
		}
	});
	
	const handleLogout = () => {
		const confirmLogout = window.confirm("Are you sure you want to log out?");
		if (confirmLogout) {
		  signOut(auth).then(() => {
			console.log('User logged out successfully');
			setName('');
			setUser(null);
		  }).catch(error => {
			console.error('Error logging out:', error.message);
		  });
		}
	  };
	  

	return (
		<>
			<div className=' w-full h-[75px] bg-white shadow-md fixed'>
				<div className='w-full h-[70px] flex align-middle justify-center items-center bg-gray-100'>
					<div></div>
					<img className=' ml-5 2xl:left-32 left-2 fixed w-[45px] h-[27px]' src={logo} alt="" />
					<div className='flex  2xl:left-44 md:left-14 fixed'>
						<div className='ml-7 inputborder max-md:hidden w-full md:w-[300px] 2xl:w-[250px] bg-white h-[50px] border-2 flex items-center justify-between p-1'>
							<CiSearch size={25} className='' />
							<input placeholder='Search city, area or loca...' className='p-2 w-full md:w-[240px] 2xl:w-[180px] 2xl:p-1' />
							<IoIosArrowDown size={25} />
						</div>
						<div className='inputborder ml-3 w-full max-lg:hidden lg:w-[350px] xl:w-[565px] 2xl:w-[650px] bg-white h-[50px] border-2 flex items-center justify-between'>
							<input placeholder='Find Cars, Mobile Phones and more...' className='p-2 w-full md:w-[340px]' />
							<div className='backgoundgreen p-2 text-white'><IoSearch size={30} className='' />
							</div>
						</div>

					</div>

					<div className='flex greenycolor items-center fixed right-4  md:right-0 lg:right-0 xl:right-14  2xl:right-36'>
						<div className='flex max-md:hidden text-sm font-bold'>ENGLISH<IoIosArrowDown size={21} /></div>
						<div>
							{name ? (
								<div className='flex align-middle items-center' >
									<p className='font-bold mx-6'>{name}</p>
									<button onClick={() => handleLogout()} ><HiOutlineLogout size={30} /></button>
								</div>
							) : (
								<div className='flex font-bold underline ml-4 cursor-pointer' onClick={() => navigate('/login')}>
									Login
								</div>
							)}
						</div>
						<div className='sell-button flex items-center shadow-sm font-bold px-3 cursor-pointer bg-white ml-3' onClick={() => navigate('/sell')}><FaPlus size={19} />&nbsp;SELL</div>
					</div>
				</div>
			</div>
			<div className='w-full h-[80px]'></div>

		</>
	);
}

export default Navbar;
