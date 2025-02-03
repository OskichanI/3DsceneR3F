import React from "react";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { EcctrlJoystick } from "ecctrl";
import { Suspense, useEffect, useState } from "react";
import Metaverse from "./Metaverse.jsx";
import LoaderProgress from "./utils/LoaderProgress.jsx";

/* const EcctrlJoystickControls = () => {
  const [isTouchScreen, setIsTouchScreen] = useState(false);
  useEffect(() => {
    // Check if using a touch control device, show/hide joystick
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouchScreen(true);
    } else {
      setIsTouchScreen(false);
    }
  }, []);
  return <>{isTouchScreen && <EcctrlJoystick buttonNumber={5} />}</>;
}; */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Leva hidden/>
    {/* <EcctrlJoystickControls /> */}
    <Canvas shadows>
      <Suspense fallback={<LoaderProgress />}>
        <Metaverse />
      </Suspense>
    </Canvas>
  </React.StrictMode>
);
