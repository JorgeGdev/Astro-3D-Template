import { Canvas } from '@react-three/fiber';
import TextExperience from './TextExperience';

export default function TextModel() {
  return (
    <Canvas 
      camera={{
        fov: 75,
        near: 0.1,
        far: 100,
        position: [0, 0, 5] 
      }}
      
    >
      <TextExperience />
    </Canvas>
  );
}
