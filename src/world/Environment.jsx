import { Environment, BakeShadows } from "@react-three/drei";
import { folder, useControls } from "leva";
import * as THREE from "three";

export default function MyEnvironment() {
  function Lights() {
    const lightControls = useControls("Illumination", {
      DirectionalLight: folder({
        dlVisible: true,
        dlPposition: {
          x: 0,
          y: 135,
          z: 110,
        },
        dlIntensity: 1.75,
        dlColor: "#FFFBF1",
        dlCastShadow: true,
        dlShadowMapSize: 4092,
        dlShadowCameraFar: 1000,
        dlShadowCameraLeft: -150,
        dlShadowCameraTop: 100,
        dlShadowCameraRight: 150,
        dlShadowCameraBottom: -100,
      }),
    });

    return (
      <>
        <directionalLight
          visible={lightControls.dlVisible}
          position={[
            lightControls.dlPposition.x,
            lightControls.dlPposition.y,
            lightControls.dlPposition.z,
          ]}
          intensity={lightControls.dlIntensity}
          color={lightControls.dlColor}
          castShadow={lightControls.dlCastShadow}
          shadow-mapSize={[
            lightControls.dlShadowMapSize,
            lightControls.dlShadowMapSize,
          ]}
          shadow-camera-far={lightControls.dlShadowCameraFar}
          shadow-camera-left={lightControls.dlShadowCameraLeft}
          shadow-camera-top={lightControls.dlShadowCameraTop}
          shadow-camera-right={lightControls.dlShadowCameraRight}
          shadow-camera-bottom={lightControls.dlShadowCameraBottom}
        />
      </>
    );
  }
  return (
    <>
      <BakeShadows />
      <Lights />
      <Environment
        background={true}
        blur={0.02}
        files={[
          "./media/skyBox/sky4/0_left_px.jpg",
          "./media/skyBox/sky4/1_right_nx.jpg",
          "./media/skyBox/sky4/2_up_py.jpg",
          "./media/skyBox/sky4/3_down_ny.jpg",
          "./media/skyBox/sky4/4_back_pz.jpg",
          "./media/skyBox/sky4/5_front_nz.jpg",
        ]}
      />
    </>
  );
}
