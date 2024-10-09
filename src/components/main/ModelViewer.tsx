"use client"
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

const Model = () => {
  const gltf = useGLTF('/models/dog.glb')
  return (
    <primitive 
      object={gltf.scene} 
      dispose={null} 
      position={[0, -1, 0]}
    />
  )
}

const ModelViewer: React.FC = () => {
  return (
      <Canvas>
        <ambientLight />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls enableZoom />
      </Canvas>
  )
}

export default ModelViewer