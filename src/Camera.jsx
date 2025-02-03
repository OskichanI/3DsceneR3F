import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { folder, useControls } from "leva";
import { useRef } from "react";

export default function Camera() {
  const cameraRef = useRef();
  const cameraSettings = useControls("Camera", {
    Camera: folder({
      camPos: [0, 2, 4],
      fov: 60,
      near: 0.1,
      far: 300,
      aspect: window.innerWidth / window.innerHeight,
    }),
    OrbitControls: folder({
      target: [0, 1.65, 0],
    }),
  });

  return (
    <>
      <OrbitControls
        camera={cameraRef.current}
        target={[
          cameraSettings.target[0],
          cameraSettings.target[1],
          cameraSettings.target[2],
        ]}
      />
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[
          cameraSettings.camPos[0],
          cameraSettings.camPos[1],
          cameraSettings.camPos[2],
        ]}
        fov={cameraSettings.fov}
        near={cameraSettings.near}
        far={cameraSettings.far}
        aspect={cameraSettings.aspect}
      />
    </>
  );
}
