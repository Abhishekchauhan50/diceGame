// In components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div
        className="h-screen bg-cover flex flex-col justify-center items-center gap-6 "
        style={{
          backgroundImage: "url('https://cdn.wallpapersafari.com/80/46/W1SEnN.jpg')",
        }}>
        <h1 className='text-8xl font-bold text-orange-600 '>Roll Dice</h1>
        <Link to='playground'>
          <button className='bg-green-600 text-white px-7 py-2 text-3xl rounded-[3rem] cursor-pointer'>Play Game</button>
        </Link>
        <p className='text-gray-400 py-20'>Developed by ❤️Abhishek Chauhan</p>
      </div>
    </>
  );
}

export default Home;
