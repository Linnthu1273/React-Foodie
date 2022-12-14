import React from 'react'
import {AiFillEye} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Card = ({meal}) => {
  return (
    <div className=' w-72 border-2 flex flex-col justify-center items-center p-5 rounded-xl gap-5 relative h-[400px] shadow-lg hover:scale-105 transition duration-300 hover:shadow-lg'>
        <img src={meal.strMealThumb} width="200" alt="" className='rounded-xl'/>
        <h3>{meal.strMeal}</h3>
        <button className='bg-blue-500 text-white px-10 py-2 rounded-xl absolute bottom-3 '>
            <Link to={`/detail/${meal.idMeal}`}>
                <AiFillEye className='text-2xl'/>
            </Link>
        </button>
    </div>
  )
}

export default Card