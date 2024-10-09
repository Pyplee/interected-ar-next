"use client"
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import "../../app/globals.css"

interface AnimatedSectionProps {
  children: React.ReactNode
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className='w-full h-full flex justify-center items-center flex-col'
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection
