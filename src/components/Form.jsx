import React from 'react'

export default function Form() {
  return (
    <div className='  bg-slate-400 relative '>
        <form action="" className='Form flex-col flex'>
          <h1>form</h1>
          <input type="text" placeholder='username' name='username'  />
          <input type="password" name='password' placeholder='password'/>
        </form>
    </div>
  )
}
