import React from 'react'

export default function Login() {
  return (
    <div>
      <h1 className='text-5xl mx-auto text-center'>Login Page</h1>
    
      <input type="email" placeholder="Enter Your Email" className="border" /> <br/>
      <input type="password" placeholder="Enter Your Password" className="border" /> <br/>
      <button className="border" >Login</button>
    </div>
  )
}
