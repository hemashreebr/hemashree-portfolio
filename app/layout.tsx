import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hemashree Balraj - Cloud & AI/ML Engineer',
  description: 'Cloud & AI/ML Engineer specializing in AWS, Agentic AI, DevOps, and Amazon Connect. 5+ years building production systems.',
  keywords: 'Cloud Engineer, AI/ML Engineer, AWS, DevOps, Agentic AI, Amazon Connect, Terraform, Kubernetes',
  authors: [{ name: 'Hemashree Balraj' }],
  openGraph: {
    title: 'Hemashree Balraj - Cloud & AI/ML Engineer',
    description: 'Cloud & AI/ML Engineer specializing in AWS, Agentic AI, DevOps, and Amazon Connect',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}