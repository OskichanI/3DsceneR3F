import * as THREE from "three";
import { useAnimations } from "@react-three/drei";
import React, { useEffect, useRef, Suspense } from "react";
import useAnimator from "../stores/useAnimator";

function AnimationController(props) {
  const group = useRef();
  const animations = props.animations
  const { actions } = useAnimations(animations, group);
  const curAnimation = useAnimator((state) => state.curAnimation);
  const resetAnimation = useAnimator((state) => state.reset);
  const initializeAnimationSet = useAnimator(
    (state) => state.initializeAnimationSet
  );
  useEffect(() => {
    initializeAnimationSet(props.set);
  }, []);
  useEffect(() => {
    const action = actions[curAnimation ? curAnimation : props.set.jumpIdle];
    
    if (curAnimation === props.set.jump  || curAnimation === props.set.jumpLand) {
      action.reset().fadeIn(0.2).setLoop(THREE.LoopOnce, void 0).play();
      action.clampWhenFinished = true;
    } else {
     
      action.reset().fadeIn(0.2).play();
    }
    action._mixer.addEventListener("finished", () => resetAnimation());
    return () => {
      action.fadeOut(0.2);
      action._mixer.removeEventListener(
        "finished",
        () => resetAnimation()
      );
      action._mixer._listeners = [];

    };
  }, [curAnimation]);
  return /* @__PURE__ */ React.createElement(Suspense, { fallback: null }, /* @__PURE__ */ React.createElement("group", { ref: group, dispose: null, userData: { camExcludeCollision: true } }, props.children));
}

export {
    AnimationController
};