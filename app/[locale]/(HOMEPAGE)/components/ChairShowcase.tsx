'use client'

import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Environment, ContactShadows } from '@react-three/drei'
import { useTranslations } from 'next-intl'
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion'
import * as THREE from 'three'

function ChairModel({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  const { scene } = useGLTF('/chair2.glb')
  const meshRef = useRef<THREE.Group>(null)

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshPhysicalMaterial({
          color: '#1c1917', // Leather brown
          roughness: 0.6,
          metalness: 0.1,
          clearcoat: 0.3,
          clearcoatRoughness: 0.4,
          sheen: 0.5,
          sheenRoughness: 0.5,
          sheenColor: new THREE.Color('#1c1917')
        })
      }
    })
  }, [scene])

  useFrame(() => {
    if (meshRef.current) {
      const progress = scrollProgress.get()
      meshRef.current.rotation.y = Math.PI + progress * Math.PI * 2
      meshRef.current.position.y = Math.sin(progress * Math.PI) * 0.2
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

export default function ChairShowcase() {
  const t = useTranslations('showcase')
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [-100, 0, 100])

  return (
    <section ref={containerRef} className="h-[200vh] relative bg-white">
      <div className="sticky top-0 h-screen flex items-center">
        <div className="max-w-[1400px] mx-auto px-[60px] w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text */}
            <motion.div style={{ opacity, x }}>
              <span className="text-xs uppercase tracking-[3px] text-[#8b8b4b] mb-4 block">
                {t('label')}
              </span>
              <h2 className="text-4xl lg:text-5xl text-stone-900 mb-6 leading-tight">
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

            {/* 3D Model */}
            <div className="h-[500px] lg:h-[600px] bg-white">
              <Canvas 
                camera={{ position: [0, 0, 5], fov: 45 }}
                style={{ background: 'white' }}
              >
                <ambientLight intensity={0.8} />
                <directionalLight position={[10, 10, 5]} intensity={1.2} />
                <directionalLight position={[-10, 5, -5]} intensity={0.5} />
                <ChairModel scrollProgress={scrollYProgress} />
                <ContactShadows 
                  position={[0, -1.5, 0]} 
                  opacity={0.3} 
                  blur={2.5}
                  color="#1c1917"
                />
                <Environment preset="studio" background={false} />
              </Canvas>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}