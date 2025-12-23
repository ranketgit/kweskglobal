'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const logos = [
  "/logos/l1.png",
  "/logos/l2.png",
  "/logos/l3.png",
  "/logos/l4.png",
  "/logos/l5.png",
  "/logos/l6.png",
  "/logos/l7.png",
]

export default function Customers() {
  const t = useTranslations('customers')

  const duplicatedLogos = [...logos, ...logos, ...logos]

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-4xl text-stone-900 mb-4 uppercase font-medium">
            {t('title')}
          </h2>
          <div className="w-24 h-0.5 mx-auto mb-16 bg-[#8b8b4b]" />
        </motion.div>

        <div className="relative w-full">
          <div 
            className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
          >
            <motion.div 
              className="flex items-center py-4"
              animate={{
                x: ['0%', '-33.33%']
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              style={{ width: 'max-content' }}
            >
              {duplicatedLogos.map((logo, i) => (
                <div 
                  key={i} 
                  className="flex-shrink-0 px-8 lg:px-12 transition-opacity duration-300 opacity-60 hover:opacity-100"
                >
                  <img 
                    src={logo} 
                    alt="Customer logo" 
                    className="h-10 lg:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" 
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}