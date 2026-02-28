import React from 'react'
import { useState } from 'react';


const CardWeather = () => {
  const [name, setName] = useState("");
  return (
    <div className='bg-blue-500 border-4 border-blue-400 h-100 rounded-4xl m-30'>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Entrez votre pays"
        className='bg-white rounded-2xl w-120 h-10 m-40'
      />
     <button type="button"
     className='bg-white h-10 w-40 -translate-x-13 rounded-2xl' >
        Chercher
       </button>      

      
    </div>
    
  )
}

export default CardWeather
