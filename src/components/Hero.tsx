'use client'
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Canvas } from '@react-three/fiber';
import { Pizza } from 'lucide-react';
import Link from 'next/link';
import SignIn from './sign-in';
import { signIn } from 'next-auth/react';

type Props = {}

const Hero = (props: Props) => {
      const [isVisible, setIsVisible] = useState(false);
    
      useEffect(() => {
        setIsVisible(true);
        const floatingElements = document.querySelectorAll('.floating');
        floatingElements.forEach((el, index) => {
          const element = el as HTMLElement;
          element.style.animationDelay = `${index * 0.5}s`;
        });
      }, []);
  return (
          <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent leading-tight">
                The Ultimate
                <br />
                <span className="text-4xl md:text-6xl">Pizza Dashboard</span>
                <br />
                Experience
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-lg leading-relaxed">
                Streamline orders, track deliveries, delight customers with our premium management platform
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
              onClick={()=> signIn('google',{ callbackUrl: "/home" })}
                size="lg" 
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-orange-500/25"
              >
                🚀 Launch Dashboard
              </Button>
             
            </div>
          </div>
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="relative w-full max-w-lg mx-auto">
              <div className="relative transform rotate-12 hover:rotate-6 transition-transform duration-700">
                <Pizza/>
                {/* <div className="w-80 h-80 bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 rounded-full shadow-2xl relative overflow-hidden pizza-3d">

                  <div className="absolute inset-4 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full"></div>

                  <div className="absolute top-16 left-20 w-8 h-8 bg-red-600 rounded-full opacity-90"></div>
                  <div className="absolute top-24 right-16 w-6 h-6 bg-green-600 rounded-full opacity-80"></div>
                  <div className="absolute bottom-20 left-16 w-7 h-7 bg-yellow-600 rounded-full opacity-85"></div>
                  <div className="absolute bottom-24 right-20 w-5 h-5 bg-red-700 rounded-full opacity-90"></div>
                  <div className="absolute top-32 left-1/2 w-9 h-9 bg-orange-700 rounded-full opacity-75"></div>
                </div> */}
              </div>

              {/* Floating Ingredients */}
              <div className="absolute -top-8 -right-8 w-12 h-12 bg-red-500 rounded-full shadow-lg floating animate-bounce opacity-70"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-500 rounded-full shadow-lg floating animate-pulse opacity-60"></div>
              <div className="absolute top-1/2 -right-12 w-10 h-10 bg-yellow-500 rounded-full shadow-lg floating animate-bounce opacity-80"></div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero