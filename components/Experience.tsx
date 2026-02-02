'use client'

import { motion } from 'framer-motion'
import { FiCalendar, FiMapPin, FiTrendingUp } from 'react-icons/fi'

const Experience = () => {
  const experiences = [
    {
      company: "Airbnb",
      role: "Cloud AI/ML Engineer",
      period: "2025 - Present",
      location: "USA",
      description: "Leading cloud AI/ML initiatives and agentic system development",
      achievements: [
        "Architected and deployed agentic AI automation platform serving 10M+ requests/month",
        "Built production RAG pipelines using SageMaker and ChromaDB, improving query accuracy by 85%",
        "Implemented Amazon Connect contact center solutions supporting 50K+ concurrent users",
        "Reduced infrastructure costs by 40% through intelligent resource optimization and automation",
        "Improved system MTTR by 60% with comprehensive monitoring and alerting systems"
      ],
      technologies: ["AWS", "SageMaker", "ChromaDB", "Amazon Connect", "Terraform", "Kubernetes"]
    },
    {
      company: "Genpact",
      role: "Cloud Engineer",
      period: "2019 - 2023",
      location: "India",
      description: "Cloud infrastructure and DevOps automation specialist",
      achievements: [
        "Led cloud migration projects using Terraform and CloudFormation, reducing deployment time by 70%",
        "Designed and implemented EKS clusters with auto-scaling, supporting 100+ microservices",
        "Built comprehensive CI/CD pipelines improving deployment frequency from weekly to daily",
        "Established monitoring and observability stack achieving 99.9% system uptime",
        "Optimized cloud costs through rightsizing and reserved instance strategies, saving $500K annually"
      ],
      technologies: ["AWS", "Terraform", "CloudFormation", "EKS", "Jenkins", "Prometheus", "Grafana"]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Building production-grade systems that drive real business impact
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {exp.role}
                  </h3>
                  <h4 className="text-xl font-semibold mb-3">{exp.company}</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                </div>
                <div className="lg:text-right lg:ml-8">
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-2">
                    <FiCalendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <FiMapPin className="w-4 h-4 mr-2" />
                    {exp.location}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h5 className="font-semibold mb-3 flex items-center">
                  <FiTrendingUp className="w-4 h-4 mr-2 text-primary-600 dark:text-primary-400" />
                  Key Achievements
                </h5>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-gray-600 dark:text-gray-400 flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2 mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="font-semibold mb-3">Technologies</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience