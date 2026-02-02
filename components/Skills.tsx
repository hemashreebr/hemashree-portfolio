'use client'

import { motion } from 'framer-motion'
import { 
  FiCloud, 
  FiCpu, 
  FiSettings, 
  FiMonitor, 
  FiShield, 
  FiUsers 
} from 'react-icons/fi'

const Skills = () => {
  const skillCategories = [
    {
      icon: <FiCloud className="w-6 h-6" />,
      title: "Cloud Platforms",
      skills: ["AWS (EC2, S3, Lambda, EKS)", "Azure", "CloudFormation", "Terraform", "CDK"]
    },
    {
      icon: <FiCpu className="w-6 h-6" />,
      title: "AI/ML & Agentic Systems",
      skills: ["SageMaker", "RAG Pipelines", "ChromaDB", "LangChain", "Agentic AI", "Amazon Connect"]
    },
    {
      icon: <FiSettings className="w-6 h-6" />,
      title: "DevOps & IaC",
      skills: ["Kubernetes", "Docker", "Jenkins", "GitLab CI/CD", "Helm", "ArgoCD"]
    },
    {
      icon: <FiMonitor className="w-6 h-6" />,
      title: "Monitoring & Observability",
      skills: ["CloudWatch", "Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic"]
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: "Security & Networking",
      skills: ["IAM", "VPC", "Security Groups", "WAF", "SSL/TLS", "Network ACLs"]
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Tools & Collaboration",
      skills: ["Git", "Jira", "Confluence", "Slack", "Python", "Bash", "YAML"]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-900">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Technical Skills</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive expertise across cloud platforms, AI/ML systems, and DevOps practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="text-primary-600 dark:text-primary-400 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-tag"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">Key Strengths</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">99.9%</div>
                <div className="text-gray-600 dark:text-gray-400">System Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">40%</div>
                <div className="text-gray-600 dark:text-gray-400">Cost Reduction</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills