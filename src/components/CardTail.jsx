import React from 'react'
import { useDispatch } from 'react-redux'
import { removefromcard } from '../pages/store/slices/card-slice'

function CardTail({carditem}) {
    const dispatch=useDispatch()

function handleremove(){
dispatch(removefromcard(carditem.id))
}

  return (
<>
<div className='flex justify-center items-between p-5 bg-red-500 mt-2 mb-2 rounded-xl'>
    <div className='flex p-3 '>
        <img src={carditem?.image} alt={carditem?.title} className="h-28 rounded-lg" />
        <div className='ml-10 self-start space-y-5'>
            <h1 className='text-white text-xl font-bold '>{carditem?.title}</h1>
            <p className='text-white font-extrabold'>{carditem?.price}</p>
        </div>
    </div>
<div> <button
            onClick={handleremove
            }
            className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
          >
           remove from card
          </button></div>
</div>
</>  )
}

export default CardTail