
import React from 'react';
import { Shield, Pizza, ChartBar } from 'lucide-react';
import { Card } from '@/components/ui/card';

type Props = {}

const Features = (props: Props) => {
  return (
   <section className="py-20 px-4 md:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Built for Modern Pizza Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage, track, and grow your pizza business in one beautiful dashboard
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Secure Google Authentication",
                description: "One-click secure access with enterprise-grade protection",
                gradient: "from-blue-500 to-purple-600",
                delay: "0s"
              },
              {
                icon: Pizza,
                title: "Real-time Order Tracking",
                description: "From kitchen to customer with live delivery updates",
                gradient: "from-orange-500 to-red-600",
                delay: "0.2s"
              },
              {
                icon: ChartBar,
                title: "Beautiful Analytics",
                description: "Insights that drive growth with stunning visualizations",
                gradient: "from-green-500 to-teal-600",
                delay: "0.4s"
              }
            ].map((feature, index) => (
              <Card 
                key={index}
                className={`relative p-8 backdrop-blur-lg bg-white/30 border-white/20 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-1 transition-all duration-500 group cursor-pointer feature-card`}
                style={{ animationDelay: feature.delay }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-orange-600 group-hover:to-red-600 transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300 pointer-events-none`}></div>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Features