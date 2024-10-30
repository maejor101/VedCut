"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import logo1 from '../assets/logo1.png'; 

export default function Splash() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null; 

  return (
    <main className="main-container">
      <Image
        src={logo1} 
        alt="App Logo"
        width={200}
        height={200}
        priority 
      />
    </main>
  );
}
