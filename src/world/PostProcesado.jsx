import {
  EffectComposer,
  DepthOfField,
  SMAA,
  Bloom,
} from "@react-three/postprocessing";
import { useRef } from "react";

export default function PostProcesado() {
  const composer = useRef();
  const normalPass = useRef();

  return (
    <>
      <EffectComposer ref={composer}>
        {/* Bloom effect */}
        <Bloom
          intensity={1.5} // bloom intensity
          luminanceThreshold={0.9} // luminance threshold
          luminanceSmoothing={0.025} // luminance smoothing
        />
        {/* Depth of Field effect */}
        <DepthOfField
          focusDistance={0} // focus distance
          focalLength={0.02} // focal length
          bokehScale={1} // bokeh scale
        />
        {/* Subpixel Morphological Antialiasing effect */}
        <SMAA />
      </EffectComposer>
    </>
  );
}
