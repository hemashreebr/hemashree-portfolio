'use client'

import { FiHeart } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-dark-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container-max section-padding py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400 flex items-center">
              Built with <FiHeart className="w-4 h-4 mx-1 text-red-500" /> using Next.js & Tailwind CSS
            </p>
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            © 2024 Hemashree Balraj. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer