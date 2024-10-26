import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
import { StrictMode } from "react";
import * as THREE from "three";
import { Leva } from "leva";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <>
    <StrictMode>
      <Leva collapsed />
      <Canvas
        dpr={[1, 2]}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [3, 2, 10],
        }}
      >
        <mesh>
          <Experience />
        </mesh>
      </Canvas>
    </StrictMode>
  </>
);
