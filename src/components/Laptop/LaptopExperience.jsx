import {
    Center,
    Environment,
    OrbitControls,
  } from "@react-three/drei";
  
import Laptop from "./Laptop.jsx";
  
  export default function LaptopExperience() {
    return (
      <>
        <OrbitControls enableZoom={false} />
        <Environment preset="city" />
        <Center>
          <group receiveShadow>
            <Laptop />
          </group>
        </Center>
      </>
    );
  }
  