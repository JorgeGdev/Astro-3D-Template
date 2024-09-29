import { Center, Environment, Float, OrbitControls, Text } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";

function ResponsiveText({ text, positionY }) {
  const { viewport } = useThree();
  const responsiveScale = viewport.width / 25; 

  return (
    <Text
      position-y={positionY}
      depthOffset={10}
      anchorX="center"
      anchorY="middle"
      fontSize={2 * responsiveScale} 
    >
      <meshStandardMaterial
        attach="material"
        color="#C0E1F7"
        metalness={1}
        roughness={0}
      />
      {text}
    </Text>
  );
}

export default function SuperContact() {
  return (
    <Canvas
      shadows
      camera={{
        fov: 75,
        near: 0.1,
        far: 100,
        position: [0, -0.5, 7],
      }}
    >
      <OrbitControls enableZoom={false} enableRotate={false} />
      <Environment preset="city" />
      <directionalLight intensity={0.5} position={[5, 5, 5]} castShadow />
      <ambientLight intensity={0.3} />
      <Float position-y={0.5} floatIntensity={0.25} speed={0.25} >
        <Center>
          <mesh castShadow receiveShadow>
            <ResponsiveText text="Interested in" positionY={2} />
            <ResponsiveText text="working together?" positionY={-2} />
          </mesh>
        </Center>
      </Float>
    </Canvas>
  );
}
