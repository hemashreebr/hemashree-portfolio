'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiCode, FiDatabase, FiCloud, FiCpu } from 'react-icons/fi'

const Projects = () => {
  const projects = [
    {
      title: "Agentic AI Automation Platform",
      description: "Enterprise-grade agentic AI system that automates complex business workflows using multi-agent orchestration and RAG capabilities.",
      problem: "Manual business processes were consuming 40+ hours/week of human resources and prone to errors",
      architecture: "Multi-agent system with LangChain orchestration, vector databases, and AWS serverless backend",
      techStack: ["AWS Lambda", "SageMaker", "ChromaDB", "LangChain", "Python", "Terraform"],
      impact: [
        "Reduced manual processing time by 85%",
        "Improved accuracy to 95% vs 70% manual baseline",
        "Processing 10M+ requests/month with 99.9% uptime"
      ],
      github: "https://github.com/hemashree-balraj/agentic-ai-platform",
      demo: "https://demo.agentic-platform.com",
      icon: <FiCpu className="w-6 h-6" />
    },
    {
      title: "RAG Pipeline with SageMaker + ChromaDB",
      description: "Production-ready Retrieval-Augmented Generation pipeline for enterprise document processing and intelligent search.",
      problem: "Enterprise needed to search and extract insights from 10M+ documents across multiple formats",
      architecture: "Distributed processing pipeline with SageMaker for embeddings, ChromaDB for vector storage, and API Gateway for access",
      techStack: ["AWS SageMaker", "ChromaDB", "API Gateway", "Lambda", "S3", "Docker"],
      impact: [
        "Query accuracy improved by 85%",
        "Search response time under 200ms",
        "Supports 50+ concurrent users"
      ],
      github: "https://github.com/hemashree-balraj/rag-pipeline",
      demo: "https://rag-demo.example.com",
      icon: <FiDatabase className="w-6 h-6" />
    },
    {
      title: "Amazon Connect Contact Center Solution",
      description: "Scalable cloud contact center implementation with AI-powered routing and real-time analytics.",
      problem: "Legacy contact center couldn't scale beyond 1K concurrent calls and lacked modern features",
      architecture: "Amazon Connect with Lambda integrations, DynamoDB for session management, and CloudWatch for monitoring",
      techStack: ["Amazon Connect", "Lambda", "DynamoDB", "CloudWatch", "Kinesis", "S3"],
      impact: [
        "Supports 50K+ concurrent users",
        "Reduced call wait times by 60%",
        "99.9% availability with auto-scaling"
      ],
      github: "https://github.com/hemashree-balraj/connect-solution",
      demo: "https://connect-demo.example.com",
      icon: <FiCloud className="w-6 h-6" />
    },
    {
      title: "CI/CD + IaC AWS Infrastructure",
      description: "Comprehensive DevOps platform with Infrastructure as Code, automated testing, and deployment pipelines.",
      problem: "Manual deployments taking 4+ hours with 30% failure rate and no rollback capabilities",
      architecture: "GitLab CI/CD with Terraform modules, EKS for container orchestration, and comprehensive monitoring",
      techStack: ["Terraform", "GitLab CI/CD", "EKS", "Helm", "Prometheus", "Grafana"],
      impact: [
        "Deployment time reduced from 4 hours to 15 minutes",
        "Zero-downtime deployments with automated rollback",
        "Infrastructure provisioning automated 100%"
      ],
      github: "https://github.com/hemashree-balraj/devops-platform",
      demo: "https://devops-demo.example.com",
      icon: <FiCode className="w-6 h-6" />
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-900">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Production systems that solve real business problems with measurable impact
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="text-primary-600 dark:text-primary-400 mr-3">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">Problem</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{project.problem}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Architecture</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{project.architecture}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Impact</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    {project.impact.map((item, impactIndex) => (
                      <li key={impactIndex} className="flex items-start">
                        <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="skill-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <FiGithub className="w-4 h-4 mr-2" />
                  Code
                </a>
                <a
                  href={project.demo}
                  className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <FiExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects