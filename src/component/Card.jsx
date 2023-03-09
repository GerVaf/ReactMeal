import React from 'react'
import './Card.css'
import {BiMessageSquareDetail} from '../../node_modules/react-icons/bi'
import {MdFavoriteBorder} from "../../node_modules/react-icons/md"
import { Link } from 'react-router-dom'
 
const Card = ({name,img,id}) => {

  return (
    <>
        <div className='card relative'>
            <img className=' h-[250px] rounded-lg '  src={img} alt="" />
            <Link to={`/detail/${id}`}><div className='detail text-gray-700 bg-yellow-300 rounded-lg h-[40px] w-[125px] top-[60%] right-0' >For Detail <BiMessageSquareDetail/></div></Link>
            <div className='detail text-gray-700 bg-yellow-300 rounded-lg h-[40px] w-[125px] top-[20%] left-0' >For Order<MdFavoriteBorder/></div>
            <h2 className=' text-[12px] font-bold' >{name}</h2>
        </div>

    </>
  )
}

export default Card