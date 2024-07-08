import React from 'react'

function Trending() {
  return (
    <>
    <div className='mx-2 font-bold text-2xl text-center'>Trending Movies</div>
    <div className='flex flex-wrap justify-around gap-4 m-4'>
        <div className='flex items-end h-56 w-36 rounded-lg overflow-hidden bg-cover bg-center bg-no-repeat bg-[url("https://images.unsplash.com/photo-1639921884918-8d28ab2e39a4?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
            <div className='text-white py-0.5 bg-gray-600/35 w-screen text-center'>
            John Wick
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Trending