'use client'

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Environment, ContactShadows } from '@react-three/drei'
import { useTranslations } from 'next-intl'
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion'
import * as THREE from 'three'

function ChairModel({ scrollProgress, isVisible }: { scrollProgress: MotionValue<number>, isVisible: boolean }) {
  const { scene } = useGLTF('/chair.glb')
  const meshRef = useRef<THREE.Group>(null)

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: '#5c4033',
          roughness: 0.6,
          metalness: 0.1,
        })
      }
    })
  }, [scene])

  useFrame(() => {
    if (meshRef.current && isVisible) {
      const progress = scrollProgress.get()
      meshRef.current.rotation.y = Math.PI + progress * Math.PI * 2
      meshRef.current.position.y = -1 + Math.sin(progress * Math.PI) * 0.2
    }
  })

  return (
    <primitive 
      ref={meshRef} 
      object={scene} 
      scale={1.5} 
      position={[0, -1, 0]} 
      rotation={[0, Math.PI, 0]}
    />
  )
}

export default function ChairShowcase2() {
  const t = useTranslations('showcase2')
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100])

  return (
    <section ref={containerRef} className="h-[200vh] relative bg-stone-50">
      <div className="sticky top-0 h-screen flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-[60px] w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* 3D Model - LEFT */}
            <div className="h-[400px] lg:h-[600px] order-2 lg:order-1">
              <Canvas 
                camera={{ position: [0, 2, 7], fov: 40 }}
                dpr={[1, 1.5]}
                frameloop={isVisible ? 'always' : 'demand'}
              >
                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 5]} intensity={1.2} />
                <ChairModel scrollProgress={scrollYProgress} isVisible={isVisible} />
                <ContactShadows position={[0, -1.5, 0]} opacity={0.2} blur={2} />
                <Environment preset="studio" background={false} />
              </Canvas>
            </div>

            {/* Text - RIGHT */}
            <motion.div style={{ opacity, x }} className="order-1 lg:order-2">
              <span className="text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-4 block">
                {t('label')}
              </span>
              <h2 className="text-3xl lg:text-5xl text-stone-900 mb-6 leading-tight">
                {t('title')}
              </h2>
              <p className="text-stone-500 leading-relaxed mb-8">
                {t('description')}
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-stone-600">
                  <span className="w-2 h-2 bg-[#8b8b4b] rounded-full" />
                  {t('feature1')}
                </li>
                <li className="flex items-center gap-3 text-stone-600">
                  <span className="w-2 h-2 bg-[#8b8b4b] rounded-full" />
                  {t('feature2')}
                </li>
                <li className="flex items-center gap-3 text-stone-600">
                  <span className="w-2 h-2 bg-[#8b8b4b] rounded-full" />
                  {t('feature3')}
                </li>
              </ul>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}