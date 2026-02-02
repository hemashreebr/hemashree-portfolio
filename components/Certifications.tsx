'use client'

import { motion } from 'framer-motion'
import { FiAward, FiCalendar } from 'react-icons/fi'

const Certifications = () => {
  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Foundational understanding of AWS Cloud concepts, services, and terminology",
      credentialId: "AWS-CCP-2023-001",
      logo: "🏆"
    },
    {
      name: "AWS Amazon Connect Fundamentals",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Specialized certification in Amazon Connect contact center solutions",
      credentialId: "AWS-ACF-2023-002",
      logo: "📞"
    }
  ]

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Certifications</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Industry-recognized certifications validating expertise in cloud technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 text-center hover:scale-105"
            >
              <div className="text-4xl mb-4">{cert.logo}</div>
              <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">{cert.issuer}</p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {cert.description}
              </p>
              <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                <FiCalendar className="w-4 h-4 mr-2" />
                {cert.date}
              </div>
              <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                <FiAward className="w-4 h-4 mr-2" />
                {cert.credentialId}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Continuous Learning</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Committed to staying current with evolving cloud technologies and best practices. 
              Currently pursuing additional AWS certifications in Solutions Architecture and Machine Learning.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications