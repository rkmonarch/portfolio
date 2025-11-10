'use client';
import React from 'react';
import { FaHiking, FaFilm, FaLaptopCode, FaEnvelope, FaTwitter, FaUsers, FaUtensils, FaFootballBall } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <main className="min-h-screen text-white font-sans py-16 px-6 sm:px-16">
      <h1 className="text-5xl font-bold mb-12 text-left">About Me</h1>

      <div className="flex flex-col sm:flex-row gap-12 items-start">
        {/* Avatar and Links */}
        <div className="flex flex-col items-center flex-shrink-0">
          <img
            src="/rk.jpg"
            alt="Rahul Kulkarni"
            className="w-48 h-48 rounded-full object-cover border-2 border-gray-700 mb-6"
          />
          <h2 className="text-2xl font-bold mb-3">Rahul Kulkarni</h2>
          <div className="flex gap-4">
            <a href="mailto:rkweb3.00@gmail.com" className="text-gray-400 hover:text-[#00FFD1] text-2xl">
              <FaEnvelope />
            </a>
            <a href="https://twitter.com/0xrahul" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00FFD1] text-2xl">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Bio and Interests */}
        <div className="flex-1 flex flex-col gap-6">
          <p className="text-gray-300 text-base leading-relaxed">
            Hey! I’m Rahul. I love building cool things in web3, exploring new countries and cultures, and spending time with family and friends. I enjoy playing cricket, watching thriller and horror movies, and yes, Timothée Chalamet is my favorite actor.  
            I also host weekly Discord office hours where we chat about tech, cook, and share ideas at SOON Labs. I like keeping things simple, learning constantly, and helping our community understand tech better through my posts and tweets.  
            My favorite movies are <strong>Dune</strong> and <strong>Grown Ups</strong>, my favorite TV shows are <strong>Dark</strong> and <strong>The Vampire Diaries</strong> (big fan of Klaus!).
          </p>

          {/* Skills & Hobbies */}
          <div className="flex flex-col gap-3 text-gray-400">
            <span className="flex items-center gap-2"><FaLaptopCode /> Web3 & Solana</span>
            <span className="flex items-center gap-2"><FaHiking /> Traveling & Hiking</span>
            <span className="flex items-center gap-2"><FaFootballBall /> Cricket</span>
            <span className="flex items-center gap-2"><FaFilm /> Movies & TV</span>
            <span className="flex items-center gap-2"><FaUsers /> Family & Friends</span>
            <span className="flex items-center gap-2"><FaUtensils /> Cooking</span>
          </div>
        </div>
      </div>
    </main>
  );
}
