'use client'

import { motion } from 'framer-motion'
import { FiCloud, FiCpu, FiSettings } from 'react-icons/fi'

const About = () => {
  const highlights = [
    {
      icon: <FiCloud className="w-8 h-8" />,
      title: "Cloud Architecture",
      description: "AWS-certified engineer with deep expertise in scalable cloud infrastructure and cost optimization"
    },
    {
      icon: <FiCpu className="w-8 h-8" />,
      title: "AI/ML & Agentic Systems",
      description: "Building production RAG pipelines and agentic AI platforms that automate complex workflows"
    },
    {
      icon: <FiSettings className="w-8 h-8" />,
      title: "DevOps Excellence",
      description: "CI/CD automation, Infrastructure as Code, and monitoring solutions that improve MTTR by 60%"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm a Cloud & AI/ML Engineer with 5+ years of experience building production systems that scale. 
            My expertise spans AWS cloud architecture, agentic AI platforms, and DevOps automation. 
            I've led initiatives that reduced infrastructure costs by 40% while improving system reliability and performance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 text-center hover:scale-105"
            >
              <div className="text-primary-600 dark:text-primary-400 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6">Core Expertise</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-3">Technical Leadership</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Led cloud migration projects reducing costs by 40%</li>
                  <li>• Architected agentic AI systems for enterprise automation</li>
                  <li>• Built RAG pipelines processing 10M+ documents</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-3">Production Impact</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Improved system uptime to 99.9% with monitoring</li>
                  <li>• Reduced MTTR by 60% through automation</li>
                  <li>• Deployed Amazon Connect solutions for 50K+ users</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About