import React from 'react'
import { Link } from 'react-router'


export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0" >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold text-gray-400">Ecomm App</h1>

        <div className="flex items-center gap-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/add-product" className="text-gray-700 hover:text-blue-600">Add Product</Link>
          <Link to="/add-brand" className="text-gray-700 hover:text-blue-600">Add Brand</Link>
          <Link to="/add-category" className="text-gray-700 hover:text-blue-600">Add Category</Link>
          <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
          <Link to="/register" className="text-gray-700 hover:text-blue-600">Register</Link>
          <Link to="/cart" className="text-gray-700 hover:text-blue-600">Cart</Link>
        </div>
      </nav>
    </header>
  )
}
