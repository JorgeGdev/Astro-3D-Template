import { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { AnimationMixer } from 'three';

export default function Laptop() {
  const { scene, animations } = useGLTF('../models/laptop.glb');
  const { viewport } = useThree(); 
  const mixer = useRef(null);
  const modelRef = useRef(scene);

  useEffect(() => {
    if (animations.length) {
      mixer.current = new AnimationMixer(scene);
      const action = mixer.current.clipAction(animations[0]);
      action.play();
    }
  }, [animations, scene]);

  // Rotation
  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.5; 
    }
  });

  // Calculating Responsive
  const responsiveScale = viewport.width / 5;

  return (
    <>
      <group scale={responsiveScale}>  
        <primitive position={[0, 0, 0]} ref={modelRef} object={scene} />
      </group>
    </>
  );
}
