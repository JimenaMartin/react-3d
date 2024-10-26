import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { StrictMode } from "react";
import * as THREE from "three";
import { Leva } from "leva";
import { Experience } from "./Experience";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <>
    <StrictMode>
      <Leva collapsed />
      <Canvas
        // shadows
        dpr={[1, 2]}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [3, 2, 10],
        }}
      >
        <color args={["ivory"]} attach="background" />
        <Experience />
      </Canvas>
    </StrictMode>
  </>
);
