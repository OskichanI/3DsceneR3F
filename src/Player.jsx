import * as THREE from "three";
import { Suspense } from "react";
import { useGLTF } from "@react-three/drei";
import { AnimationController } from './controllers/AnimationController'

 
const Player = (props) => {

  const { types, clips, path, extension } = props

  const head_model = useGLTF("assets_3D/character/avatar/head_m005.glb");
  const outfit_model = useGLTF("assets_3D/character/avatar/out_m001.glb");
  const accessory_model = useGLTF("assets_3D/character/avatar/acc_m001.glb");
  
  const head = new THREE.Group();
  const outfit = new THREE.Group();
  const accessory = new THREE.Group();

  head.add(head_model.scene);
  outfit.add(outfit_model.scene);
  accessory.add(accessory_model.scene)
  
  let animationlist = []

  types.forEach(item => {
    let { animations } = useGLTF(`${path}/${item}.${extension}`);
    animationlist.push(animations[0])
  });


  const animationSet = clips

  return (
    <Suspense fallback={null}>
      <group position={[0, -0.9, 0]}>
        <AnimationController animations={animationlist} set={animationSet}>
          <primitive object={head}  />
        </AnimationController>
        <AnimationController animations={animationlist} set={animationSet}>
          <primitive object={outfit}/>
        </AnimationController >
        <AnimationController animations={animationlist} set={animationSet}>
          <primitive object={accessory}/>
        </AnimationController>
      </group>
    </Suspense>
  );
}

export default Player