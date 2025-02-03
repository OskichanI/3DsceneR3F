import "./style.css";
import * as THREE from "three";
import { useEffect, useState } from "react";
import { Perf } from "r3f-perf";
import { Canvas, useThree } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import CharacterController from "./controllers/CharacterController";
import { useControls } from "leva";
import MainData from "./data/Data";
import MyEnvironment from "./world/Environment";
import World from "./world/World";
import Camera from "./Camera";
import Player from "./Player";
import Data from "./data/Metaverse.json";

function Metaverse() {
  MainData.setRoom("city");
  /**
   * Delay physics activate
   */
  const [pausedPhysics, setPausedPhysics] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPausedPhysics(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);
  /**
   * Debug settings
   */
  const { physics, disableFollowCam } = useControls("World Settings", {
    physics: false,
    disableFollowCam: false,
  });
  /**
   * Keyboard control preset
   */
  const keyboardMap = Data.animations.setup;
  const animationClips = Data.animations.clips;
  const animationTypes = Data.animations.types;
  const path = Data.animations.path;
  const extension = Data.animations.extension;

  return (
    <>
      <Perf position="top-left" />
      <MyEnvironment />
      {/* <Camera /> */}
      <Physics debug={physics} timeStep="vary" paused={pausedPhysics}>
        <KeyboardControls map={keyboardMap}>
          <CharacterController debug animated>
            <Player
              clips={animationClips}
              types={animationTypes}
              path={path}
              extension={extension}
            />
          </CharacterController>
        </KeyboardControls>
        <World />
      </Physics>
    </>
  );
}

export default Metaverse;
