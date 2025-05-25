import React from 'react'
import { Button } from '@/components/ui/button';

type Props = {}

const Cta = (props: Props) => {
  return (
     <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Ready to Revolutionize Your Pizza Business?
          </h2>
          <p className="text-xl text-orange-100 mb-12 max-w-2xl mx-auto">
            Join thousands of pizza entrepreneurs who've transformed their operations with our platform
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-4 rounded-xl text-lg font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              🎯 Start Free Trial
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-10 py-4 rounded-xl text-lg font-bold transform hover:scale-105 transition-all duration-300"
            >
              📺 Login
            </Button>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
          <div className="absolute top-32 right-16 w-16 h-16 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-40 right-10 w-12 h-12 border-2 border-white rounded-full"></div>
        </div>
      </section>
  )
}

export default Cta