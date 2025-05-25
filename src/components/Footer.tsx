import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
   <footer className="py-12 px-4 md:px-8 bg-gray-900 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-white mb-4">
            🍕 PizzaHub
          </div>
          <p className="text-gray-400">
            Built with ❤️ for pizza entrepreneurs worldwide
          </p>
        </div>
      </footer>
  )
}

export default Footer