import React from 'react'

export default function Register() {
  return (
    <div>
      <h1 className='text-5xl mx-auto text-center'>Register</h1>

       <input type="text" placeholder="Enter Your Full Name" className="border" /> <br/>
       <input type="email" placeholder="Enter Your Email" className="border" /> <br/>
      <input type="password" placeholder="Enter Your Password" className="border" /> <br/>
      <input type="password" placeholder="Confirm Password" className="border" /> <br/>
      <button className="border" >Register</button>
    </div>
  )
}
