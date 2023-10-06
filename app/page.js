import React from 'react';

import Hero from './components/Hero'
import './globals.css'

export default function Home() {
  return (
    <div className="landing">
      <div className="seperator"></div>
      <Hero />
      <div className="seperator"></div>
    </div>
  )
}
