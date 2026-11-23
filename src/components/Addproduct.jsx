import React from 'react'

export default function Addproduct() {
  return (
     <div className="w-6xl mx-auto">
      <h1 className='text-5xl mx-auto text-center'>Add Product</h1>
      <select className="border">
          <option value="">Please Select Category</option>
          <option >Men's</option>
          <option>Women's</option>
      </select> <br/>
      <select className="border">
          <option value="">Please Select Brand</option>
          <option >Nike</option>
          <option>Adidas</option>
          <option>Puma</option>
          <option>Reebok</option>
      </select> <br />
      <input type="text" placeholder="Enter Product Name" className="border" />
      <br/>
      <input type="text" placeholder="Enter Price" className="border" />
      <br/>
      <input type="text" placeholder="Enter Discount" className="border" />
      <br/>
      <input type="file" className="border"/><br/>
      <textarea placeholder='Add Product Description' className='border' /><br/>
      <button className="border" >Add Group</button>
      </div>
  )
}
