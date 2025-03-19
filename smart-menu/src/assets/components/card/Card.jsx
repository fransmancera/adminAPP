import React from 'react'
import './card.css'

const Card = () => {
  return (
    <div className='flex justify-center card-container'>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="/images/food.jpg" alt="Food"/>
            <div className='grid grid-cols-4'>
                <img className="card-icon" src="/images/food.jpg" alt="foodsita" />
                <img className="card-icon" src="/images/food.jpg" alt="foodsita" />
                <img className="card-icon" src="/images/food.jpg" alt="foodsita" />
                <img className="card-icon" src="/images/food.jpg" alt="foodsita" />
            </div>
            <div className="px-2 py-4">
                <div className="font-bold text-sm mb-2">
                    The Food
                </div>
                <p className="text-gray-700 text-sm line-clamp-2">
                    Comida que se come.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Card
