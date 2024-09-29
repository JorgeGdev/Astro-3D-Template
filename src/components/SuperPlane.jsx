import { Canvas } from '@react-three/fiber';
import { Center, Environment, OrbitControls, Float, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import PropTypes from 'prop-types';

export default function SuperPlane({ imageUrl }) {
  return (
    <Canvas
      shadows
      camera={{
        fov: 75,
        near: 0.1,
        far: 100,
        position: [0, 0, 2],
      }}
      style={{ width: '100%', height: '100%' }}
    >
      
      <Environment preset="city" />
      <directionalLight intensity={0.5} position={[5, 5, 5]} castShadow />
      <ambientLight intensity={0.3} />
      <Center>
        <Float speed={3} rotationIntensity={3} floatIntensity={2}>
          <TexturedPlane imageUrl={imageUrl} />
        </Float>
      </Center>
    </Canvas>
  );
}

function TexturedPlane({ imageUrl }) {
  const texture = useTexture(imageUrl);
  texture.colorSpace = THREE.SRGBColorSpace; 

  return (
    <mesh castShadow receiveShadow>
      <planeGeometry scale={10} args={[3, 2]} />
      <meshStandardMaterial
        map={texture}
        metalness={0.5}
        roughness={0.3}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

TexturedPlane.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};
