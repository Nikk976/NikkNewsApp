import React from 'react'
import loader from './loading.gif'
export default function Spinner () {
    return (
      <div className='text-center'>
        <img className='my-2' src= {loader} alt="loading" />
      </div>
    )

}
