import {
  Center,
  Environment,
  OrbitControls,
  ContactShadows,
} from "@react-three/drei";
import MainCharacter from "./MainCharacter.jsx";

export default function MainExperience() {
  return (
    <>
      <OrbitControls enableZoom={false} />
      <Environment preset="city" />
      <directionalLight castShadow position={[1, 2, 3]} intensity={3.5} />
      <ambientLight intensity={0.5} />

      <Center>
        <group receiveShadow>
          <MainCharacter />
        </group>
      </Center>
    </>
  );
}
