import React from 'react'

const Quantity = () => {
  return (
    <div className=' flex items-center gap-3 mt-3'>
        <p className=' text-md font-semibold mr-2'>Quantity:-</p>
        <button className=' text-2xl h-8 w-8 rounded-full text-center bg-gray-400  '>-</button>
        <div>1</div>
        <button className=' text-2xl h-8 w-8 rounded-full text-center border border-black '>+</button>
    </div>
  )
}

export default Quantity