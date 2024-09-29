import { Canvas } from '@react-three/fiber';
import LaptopExperience from './LaptopExperience';

export default function LaptopModel() {
  return (
    <Canvas 
      camera={{
        fov: 75,
        near: 0.1,
        far: 100,
        position: [0, 0.1, 0.5] 
      }}
     
    >
      <LaptopExperience />
    </Canvas>
  );
}
