import {
  Center,
  Environment,
  Float,
  MeshTransmissionMaterial,
  OrbitControls,
  SoftShadows,
  Text3D,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber"; 

export default function TextExperience() {
  const { viewport } = useThree(); 

  
  const responsiveScale = viewport.width / 1000; 

  return (
    <>
      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 4} 
        maxPolarAngle={Math.PI / 1.5} 
        minAzimuthAngle={-Math.PI / 8} 
        maxAzimuthAngle={Math.PI / 8} 
      />
      <SoftShadows size={15} focus={1.5} samples={12} />
      <Environment preset="sunset" />
      <directionalLight
        position={[15, 15, 15]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
        shadow-camera-far={300}
        shadow-camera-left={-40}
        shadow-camera-right={40}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-camera-near={0.1}
      />
      <hemisphereLight intensity={1.35} />

      <Center>
        <group receiveShadow>
          <Float position-y={1.5} floatIntensity={0.3} speed={2}>
            <Center>
              <Text3D
                castShadow
                bevelEnabled
                font="/fonts/helvetiker_regular.typeface.json"
                smooth={1}
                scale={responsiveScale}
                size={80}
                height={4}
                curveSegments={10}
                bevelThickness={10}
                bevelSize={2}
                bevelOffset={0}
                bevelSegments={5}
              >
                Hi! Im Jhon Doe
                <MeshTransmissionMaterial
                  clearcoat={1}
                  samples={3}
                  thickness={40}
                  chromaticAberration={0.25}
                  anisotropy={0.4}
                />
              </Text3D>
            </Center>
          </Float>

          <Float position-y={-1.5} speed={1.5} floatIntensity={0.5}>
            <Center>
              <Text3D
                castShadow
                bevelEnabled
                font="/fonts/helvetiker_regular.typeface.json"
                smooth={1}
                scale={responsiveScale}
                size={80}
                height={4}
                curveSegments={10}
                bevelThickness={10}
                bevelSize={2}
                bevelOffset={0}
                bevelSegments={5}
              >
                Web Developer
                <MeshTransmissionMaterial
                  clearcoat={1}
                  samples={3}
                  thickness={40}
                  chromaticAberration={0.25}
                  anisotropy={0.4}
                />
              </Text3D>
            </Center>
          </Float>
        </group>
      </Center>
    </>
  );
}
