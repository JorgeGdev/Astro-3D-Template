import { Center, Environment } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function RotatingIcosahedron() {
  const meshRef = useRef(); 

 
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <icosahedronGeometry args={[6, 2]} />
      <meshStandardMaterial 
        color="#0000ff" 
        metalness={0.5} 
        roughness={0.3} 
        wireframe={true} 
      />
    </mesh>
  );
}

export default function SuperIcon() {
  return (
    <Canvas 
      shadows
      camera={{
        fov: 75,
        near: 0.1,
        far: 100,
        position: [0, 0, 11] 
      }}
    //   style={{ background: '#ADFF2F' }} 
    >
      
      
      <Environment preset="city" />
      <directionalLight intensity={0.5} position={[5, 5, 5]} castShadow />
      <ambientLight intensity={0.3} />
      <Center>
        <group receiveShadow>
          <RotatingIcosahedron />
        </group>
      </Center>
    </Canvas>
  );
}
