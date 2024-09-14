import React from 'react'
import Lottie  from 'lottie-react'
import Beer from '../assets/lottie_files/Animation - 1726329867917.json'
export default function LottieExample() {
  return (
    <div className='w-1/6'><Lottie animationData={Beer}></Lottie></div>
  )
}
