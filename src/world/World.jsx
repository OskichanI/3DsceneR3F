import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { useControls, button, folder } from "leva";
import Resources from "../utils/Resources";
import City from "./levels/00_city/City";
import MyEnvironment from "./Environment";
import PostProcesado from "./PostProcesado";

export default function World() {
  return (
    <>
      <PostProcesado />

      {/* <Resources /> */}
      <City />
    </>
  );
}
