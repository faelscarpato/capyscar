/**
 * WebGL Background Component
 * Neo-Brutalism Digital Design: Wireframe geometric particles
 * Reacts to scroll and mouse movement
 */

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function supportsWebGL() {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      canvas.getContext("webgl2") ||
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl"),
    );
  } catch {
    return false;
  }
}

function WireframeParticles() {
  const meshRef = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  
  // Create geometric particle system
  const particles = useMemo(() => {
    const count = 1000;
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    
    return positions;
  }, []);
  
  // Mouse movement handler
  const handleMouseMove = (event: MouseEvent) => {
    mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };
  
  // Scroll handler
  const handleScroll = () => {
    if (meshRef.current) {
      const scrollY = window.scrollY;
      meshRef.current.rotation.x = scrollY * 0.0002;
    }
  };
  
  // Setup event listeners
  useMemo(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Animation loop
  useFrame((state) => {
    if (meshRef.current) {
      // Rotate based on time
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      
      // React to mouse position
      meshRef.current.rotation.x += (mouseRef.current.y * 0.1 - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.z += (mouseRef.current.x * 0.1 - meshRef.current.rotation.z) * 0.05;
    }
  });
  
  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#84cc16"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function WireframeGrid() {
  const gridRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      gridRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });
  
  return (
    <mesh ref={gridRef} position={[0, -5, -5]}>
      <planeGeometry args={[20, 20, 20, 20]} />
      <meshBasicMaterial
        color="#84cc16"
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  );
}

export default function WebGLBackground() {
  const webglAvailable = useMemo(() => supportsWebGL(), []);

  if (!webglAvailable) {
    return (
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(1200px 800px at 20% 10%, rgba(132, 204, 22, 0.12), transparent 60%), radial-gradient(800px 600px at 80% 0%, rgba(132, 204, 22, 0.08), transparent 60%)",
        }}
        aria-hidden="true"
      />
    );
  }

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: "transparent" }}
      >
        <WireframeParticles />
        <WireframeGrid />
      </Canvas>
    </div>
  );
}


