'use client'

import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiDownload } from 'react-icons/fi'

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiMail className="w-6 h-6" />,
      label: "Email",
      value: "hemab6596@gmail.com",
      href: "mailto:hemab6596@gmail.com"
    },
    {
      icon: <FiLinkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/hemashree19",
      href: "https://www.linkedin.com/in/hemashree19/"
    },
    {
      icon: <FiGithub className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/hemashreebr",
      href: "https://github.com/hemashreebr/aws-projects"
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      label: "Location",
      value: "King of Prussia,Pennsylvania",  // 👈 CHANGE THIS
      href: null
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-900">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Let's Connect</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Open to discussing cloud architecture, AI/ML projects, and DevOps opportunities
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="text-primary-600 dark:text-primary-400 mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-medium">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-gray-600 dark:text-gray-400">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className="text-2xl font-semibold mb-6">What I'm Looking For</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-primary-600 dark:text-primary-400 mr-3 mt-1">•</div>
                  <div>
                    <div className="font-medium">Cloud Engineering Roles</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                      AWS-focused positions with infrastructure automation
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-primary-600 dark:text-primary-400 mr-3 mt-1">•</div>
                  <div>
                    <div className="font-medium">AI/ML Engineering</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                      Agentic AI systems and production ML pipelines
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-primary-600 dark:text-primary-400 mr-3 mt-1">•</div>
                  <div>
                    <div className="font-medium">DevOps/Platform Engineering</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                      CI/CD, IaC, and developer experience platforms
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Ready to Collaborate?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                Whether you're looking for a cloud engineer, AI/ML specialist, or DevOps expert, 
                I'm excited to discuss how I can contribute to your team's success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:hemab6596@gmail.com"
                  className="btn-primary"
                >
                  Send Email
                </a>
                <a
                  href="/resume.pdf"
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  <FiDownload className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact