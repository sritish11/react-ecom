import React from 'react'

export default function Products() {
  return (
    <div><h1 className='mx-auto text-5xl text-center'>PRODUCTS</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
      <div className="bg-white rounded-lg shadow p-4">
        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400" alt="Headphones" className="w-full h-40 object-cover rounded" />
        <h3 className="mt-3 font-semibold text-gray-800">Headphones</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="font-bold text-indigo-600">$120</span>
          <button className="text-sm bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700">Add To Cart</button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400" alt="Smart Watch" className="w-full h-40 object-cover rounded" />
        <h3 className="mt-3 font-semibold text-gray-800">Smart Watch</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="font-bold text-indigo-600">$250</span>
          <button className="text-sm bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700">Add To Cart</button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400" alt="Backpack" className="w-full h-40 object-cover rounded" />
        <h3 className="mt-3 font-semibold text-gray-800">Backpack</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="font-bold text-indigo-600">$85</span>
          <button className="text-sm bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700">Add To Cart</button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" alt="Sneakers" className="w-full h-40 object-cover rounded" />
        <h3 className="mt-3 font-semibold text-gray-800">Sneakers</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="font-bold text-indigo-600">$110</span>
          <button className="text-sm bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700">Add To Cart</button>
        </div>
      </div>
    </div>
  </div>
  )
}
