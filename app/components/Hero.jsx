import React from 'react';
import { Satisfy } from 'next/font/google';
import './components.css'

const satisfy = Satisfy({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

export default function Hero() {
  return (
    <div className="hero">
      <div>
      <h1 className={satisfy.className}>Unleash Your Inner Rockstar</h1>
      <p>Join us for the ultimate karaoke experience.</p>
      <button>Get Started</button>
      </div>
    </div>
  );
};