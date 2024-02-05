import React, { useState } from 'react'
import './Card.css'
import { useNavigate } from 'react-router-dom'
import { UserDocReference } from '../store/FirebaseContext'



function Card({ data }) {
	
	const navigate = useNavigate()
	return (
		<>
			<div  className=' max-sm:mx-auto mt-3   xl:mx-auto w-[300px] h-[280px] border border-gray-400 rounded-sm  p-2 ' onClick={() => navigate(`/product_details`,{state:{data}})} >
				<div key={data} className='bg-white h-[160px] p-1 ' style={{backgroundImage:`url(${data.url})`, backgroundSize:"contain", backgroundRepeat:"no-repeat", backgroundPosition:"center" }}>
				</div>
				<div className='overflow-hidden'>
					<div className='font-bold w-full text-2xl '>{data.price}</div>
					<div className='text-base'>{data.name}</div>
					<div className='mt-1 text-gray-500 text-sm'>{data.brand}</div>
					<div className='mt-1 text-gray-500 text-xs'><span>{data.location}</span> <span className='float-end'>{data.date}</span></div>
				</div>
			</div>
		</>

	)
}

export default Card
