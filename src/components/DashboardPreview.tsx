import React from 'react'

type Props = {}

const DashboardPreview = (props: Props) => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Peek Inside the Dashboard
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Experience the power of our intuitive interface designed for pizza professionals
          </p>

          <div className="relative max-w-4xl mx-auto">
            {/* Mock Dashboard */}
            <div className="relative bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <div className="h-96 bg-gradient-to-br from-orange-100 to-red-100 p-8 blur-sm">
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="h-20 bg-white rounded-lg shadow"></div>
                  <div className="h-20 bg-white rounded-lg shadow"></div>
                  <div className="h-20 bg-white rounded-lg shadow"></div>
                  <div className="h-20 bg-white rounded-lg shadow"></div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="h-48 bg-white rounded-lg shadow"></div>
                  <div className="h-48 bg-white rounded-lg shadow"></div>
                  <div className="h-48 bg-white rounded-lg shadow"></div>
                </div>
              </div>

              {/* Stats Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Live Dashboard Stats</h3>
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-black text-orange-600">247</div>
                      <div className="text-sm text-gray-600">Orders Today</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-red-600">12</div>
                      <div className="text-sm text-gray-600">Active Deliveries</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-green-600">98%</div>
                      <div className="text-sm text-gray-600">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating UI Elements */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-500 rounded-lg shadow-lg floating animate-pulse opacity-80"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-red-500 rounded-lg shadow-lg floating animate-bounce opacity-70"></div>
            <div className="absolute top-1/2 -left-8 w-10 h-10 bg-yellow-500 rounded-lg shadow-lg floating animate-pulse opacity-60"></div>
          </div>
        </div>
      </section>
  )
}

export default DashboardPreview