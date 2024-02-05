import React, { useEffect, useState } from 'react'
import { AiOutlineShareAlt } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import avtar from '../assets/avatar.avif'
import { IoIosArrowForward } from "react-icons/io";
import './ProductContent.css'
import Layout from '../Layout';
import { useLocation } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/config';

function ProductContent() {
	const {state} = useLocation()
	const {data} = state;
	const [sellerData, setSellerData] = useState({})
	console.log(sellerData);


	useEffect( () => {
		const fetchSellerDoc = async () => {
			const sellerInfo = await getDoc(doc(db, 'users', data.userid))
			setSellerData(sellerInfo.data())
		}
		fetchSellerDoc();

		
	},[]);

	return (
		<>
			<Layout>
				<div className='w-full py-4 xl:h-[750px] h-[1300px] grid xl:flex md:justify-center  bg-gray-200'>
					<div className=' lg:w-[830px]    h-[670px] rounded-md'>
						<div className='h-[450px]  max-lg:w-full rounded-md bg-black'   style={{backgroundImage:`url(${data.url})`, backgroundSize:"contain", backgroundRepeat:"no-repeat", backgroundPosition:"center" }} ></div>
						<div className='description rounded-md   mt-1 p-4 h-[180px] bg-white xl:h-[130px] border'>
							<div className='text-xl font-bold'>Details</div>
							<div className='text-md py-3 lg:w-[50%] w-[100%]'><span className='text-gray-500'>Brand</span><span className='float-right'>{data.brand}</span></div>
							<hr className='text-gray-500 mt-2' />
							
						</div>
					</div>
					<div className=' xl:ml-4 xl:w-[400px]  h-[400px] rounded-md max-sm:w-full'>
						<div className=' h-[160px] border bg-white  rounded-md p-3'>
							<div className='font-bold text-3xl'>
								<span>{data.price}</span>
								<span className='float-end flex'>
									<AiOutlineShareAlt size={24} />
									<IoMdHeartEmpty size={24} className='ml-2' />
								</span>
							</div>
							<div className='text-gray-600 mt-4'>{data.name}</div>
							<div className='text-xs mt-8'><span>{data.location}, India</span> <span className='float-right ml-1'>{data.date}</span></div>
						</div>
						<div className='h-[160px]  border bg-white   rounded-md mt-4  flex flex-col justify-between p-4'>
							<div className='flex items-center'>
								<img className='w-[60px] rounded-[100px]' src={avtar} alt="" />
								<span className='ml-2 font-bold'>{sellerData.username}</span>
								<span className='text-black ml-[305px] lg:ml-[650px] xl:ml-[230px]'><IoIosArrowForward /></span>
							</div>	
							<span className='ml-2 font-bold'>{sellerData.email}</span>

							<div className='px-2 py-2 border border-black cursor-pointer flex justify-center font-bold mt-1 rounded-md'>Chat with Seller</div>
						</div>



						<div className=' h-[100px] border bg-white   rounded-md mt-4  p-4'>
							<div className='font-bold text-2xl'>
								<span>Posted In</span>

							</div>
							<div className='text-xs mt-4'><span>{data.location}, India</span> <span className='float-right'>{data.date}</span></div>
						</div>
					</div>
				</div>
			</Layout>
		</>
	)
}

export default ProductContent