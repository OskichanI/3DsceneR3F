import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { RigidBody } from "@react-three/rapier";

export default function GLBLoader({ data }) {
  // let model = useGLTF('./sueloPadel.glb');
  let model = useGLTF(data.path[0]);

  const traverseAndSetShadow = (object) => {
    object.traverse((c) => {
      if (c.isMesh) {
        c.receiveShadow = true;
        c.castShadow = true;
        c.material.side = 0;
      }
    });
  };

  traverseAndSetShadow(model.scene);

  return (
    <>
      {data.visible ? (
        <RigidBody type="fixed" colliders="trimesh">
          <primitive object={model.scene} />
        </RigidBody>
      ) : null}
    </>
  );
}
