"use client"
import React from 'react'
import { motion } from 'framer-motion'

const ContactForm: React.FC = () => {
  return (
    <>
    <div className="flex justify-start items-center w-full mx-auto">
      <h2 className="text-2xl font-bold">Contact Me</h2>
    </div>
    <motion.form
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      className="w-full mx-auto bg-black text-white rounded shadow-md adaptive-form"
    >
      <div className="mb-4">
        <label className="block">Name</label>
        <motion.input
          type="text"
          className="w-full px-3 py-2 border border-gray-600 rounded bg-black"
          whileFocus={{ scale: 1.02 }}
        />
      </div>
      <div className="mb-4">
        <label className="block">Email</label>
        <motion.input
          type="email"
          className="w-full px-3 py-2 border border-gray-600 rounded bg-black"
          whileFocus={{ scale: 1.02 }}
        />
      </div>
      <div className="mb-4">
        <label className="block">Message</label>
        <motion.textarea
          className="w-full px-3 py-2 border border-gray-600 rounded bg-black"
          rows={4}
          whileFocus={{ scale: 1.02 }}
        />
      </div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-3/12 px-2 py-2 bg-orange-500 text-white rounded-lg"
      >
        Submit
      </motion.button>
    </motion.form>
    </>
  )
}

export default ContactForm
