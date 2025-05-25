"use client";
import React, { useEffect } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DashboardPreview from "@/components/DashboardPreview";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Pizza from "@/components/Pizza";

export default function Home() {
  
  useEffect(() => {
    const floatingElements = document.querySelectorAll(".floating");
    floatingElements.forEach((el, index) => {
      const element = el as HTMLElement;
      element.style.animationDelay = `${index * 0.5}s`;
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-orange-400 rounded-full opacity-30 floating animate-bounce"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-red-400 rounded-full opacity-20 floating animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-yellow-400 rounded-full opacity-40 floating animate-bounce"></div>
        <div className="absolute top-1/2 right-10 w-5 h-5 bg-orange-500 rounded-full opacity-25 floating animate-pulse"></div>
      </div>
      <Hero />
      <Features />
      <DashboardPreview />
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Built with Modern Technology
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Powered by cutting-edge tools for performance, security, and
            scalability
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="text-center">
              <div className="text-3xl font-black text-green-600 mb-2">
                99.9%
              </div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-blue-600 mb-2">
                &lt;2s
              </div>
              <div className="text-gray-600">Load Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-purple-600 mb-2">
                24/7
              </div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>
      <Cta />
      <Footer />
    </div>
  );
}
