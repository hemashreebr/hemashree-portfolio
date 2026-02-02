'use client'

import { motion } from 'framer-motion'
import { FiDownload, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 pt-16">
      <div className="container-max section-padding">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Hemashree Balraj</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 font-medium">
              Cloud & AI/ML Engineer | AWS • Agentic AI • DevOps
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              5+ years building production-grade cloud infrastructure and AI/ML systems. 
              Specialized in AWS, agentic AI platforms, and DevOps automation that drives real business impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="/resume.pdf" className="btn-secondary flex items-center gap-2">
              <FiDownload className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="mailto:hemab6596@gmail.com"
              className="p-3 rounded-full bg-white dark:bg-dark-800 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
              aria-label="Email"
            >
              <FiMail className="w-6 h-6 text-primary-600" />
            </a>
            <a
              href="https://www.linkedin.com/in/hemashree19/"
              className="p-3 rounded-full bg-white dark:bg-dark-800 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-6 h-6 text-primary-600" />
            </a>
            <a
              href="https://github.com/hemashreebr/aws-projects"
              className="p-3 rounded-full bg-white dark:bg-dark-800 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
              aria-label="GitHub"
            >
              <FiGithub className="w-6 h-6 text-primary-600" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero