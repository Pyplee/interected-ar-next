"use client"
import React from 'react'
import { motion } from 'framer-motion'

interface ARButtonProps {
  onClick: () => void
}

const ARButton: React.FC<ARButtonProps> = ({ onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="px-10 py-2 bg-black text-white rounded-t-lg"
    >
      View in AR
    </motion.button>
  )
}

export default ARButton
