import { useState, useContext, useEffect, useMemo } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Cutombackbutton from '../Cutombackbutton';
import { AuthContext, FirebaseContext } from '../store/FirebaseContext';
import { db, storage } from '../Firebase/config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { setDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


function Sell() {
	const [nameChange, setNameChange] = useState('');
	const [category, setCategory] = useState('');
	const [price, setPrice] = useState('');
	const [location, setLocation] = useState('');
	const [image, setImage] = useState('');
	const [userUUID, setUserUUID] = useState('');

	const {main,setMain} = useContext(AuthContext)
	 
	useEffect(()=>{
		(main)?setUserUUID(main.uid):''
		console.log(userUUID);
	},[main])

	// console.log(userUUID);

	const generateUUID = () => {
		return uuidv4();
	  };

	const navigate = useNavigate()

	const handleSellButtonClick = async () => {
		// part of image uploading to the firebase storage
		const storageRef = ref(storage, `/images/${image.name}`);
		await uploadBytes(storageRef, image);
		const downloadURL = await getDownloadURL(storageRef);
		console.log('Image uploaded. Download URL:', downloadURL);

		
		// const productCollectionRef = collection(db, "products");
		const newUUID = generateUUID();

		const date = new Date();
		let day = date.getDate();
		let month = date.getMonth() + 1;  
		let year = date.getFullYear();
		let currentDate = `${day}-${month}-${year}`;

		const product = {
			id:newUUID,
			name: nameChange,
			price: Number(price),
			location: location,
			brand: category,
			date: currentDate,
			userid: main.uid,
			url: downloadURL
		};

        const refer=doc(db,'products',newUUID)
		await setDoc(refer, product)
		navigate("/");

	}


	return (
		<>
			<div className='w-full h-lvh bg-gray-200 flex items-center justify-center'>
				<div className='lg:w-[35%] drop-shadow-lg w-[100%] h-[670px] rounded-md bg-white border'>
					<div className='w-full cursor-pointer' onClick={() => Cutombackbutton()}>
						<IoMdArrowRoundBack size={25} className='mt-4 ml-4' />
					</div>

					<div className='w-full mt-9 text-2xl mb-10 font-bold flex items-center justify-center'>
						<span>Sell Product</span>
					</div>
					<div className='w-full mt-3 flex items-center justify-center'>
						<input
							className='border-2 backgoundgreenlogin'
							onChange={(e) => setNameChange(e.target.value)}
							value={nameChange}
							placeholder='Product Name'
						></input>
					</div>
					<div className='w-full mt-3 flex items-center justify-center'>
						<input
							className='border-2 backgoundgreenlogin'
							onChange={(e) => setCategory(e.target.value)}
							value={category}
							placeholder='Category'
						></input>
					</div>
					<div className='w-full mt-3 flex items-center justify-center'>
						<input
							className='border-2 backgoundgreenlogin'
							onChange={(e) => setPrice(e.target.value)}
							value={price}
							placeholder='Price'
						></input>
					</div>
					<div className='w-full mt-3 flex items-center justify-center'>
						<input
							className='border-2 backgoundgreenlogin'
							onChange={(e) => setLocation(e.target.value)}
							value={location}
							placeholder='Location'
						></input>
					</div>
					<div className='w-full mt-1 px-14 font-semibold flex justify-start text-xs'>images</div>
					<div className='w-full flex items-center justify-center'>
						<input
							type='file'
							onChange={(e) => setImage(e.target.files[0])}
							className='border-2 py-2 text-sm font-semibold backgoundgreenlogin'
						/>
					</div>
					{image ? (<div className='w-full mt-3 flex items-center justify-center'>
						<img className=' bg-white w-1/2 h-1/2' src={image ? URL.createObjectURL(image) : ''} alt='' />
					</div>) : ''}
					
					<div className='w-full mt-7 font-bold text-white flex items-center justify-center'>
						<button onClick={handleSellButtonClick} className='border-2 backgoundgreenbutton'>
							Sell
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Sell;
