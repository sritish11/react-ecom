import React from 'react'
import Cart from './Cart'
import Category from './Category'
import Brand from './Brand'
import Products from './Products'

export default function Home() {
  return (
    <div className='grid grid-cols-[25%_75%] border'>
      <div className='text-center text-2xl'>
        <Category />
        <Brand />
      </div>
      <div>
        <Products />
      </div>
    </div>
  )
}
