import React from 'react'

const Username = ({params}) => {
  return (
    <div className='text-white text-4xl text-center justify-center'>
     {params.Username}
    </div>
  )
}

export default Username