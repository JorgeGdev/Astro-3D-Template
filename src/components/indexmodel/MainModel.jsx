import { Canvas } from '@react-three/fiber';
import MainExperience from './MainExperience';

export default function MainModel() {
  return (
    <Canvas 
      camera={{
        fov: 75,
        near: 0.1,
        far: 100,
        position: [0, -1, 5] 
      }}
      // style={{ background: '#ADFF2F' }} 
    >
      <MainExperience />
    </Canvas>
  );
}
