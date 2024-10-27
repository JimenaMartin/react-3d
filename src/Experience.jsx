import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Perf } from "r3f-perf";
import Helmet from "./Helmet";
import Placeholder from "./Placeholder";
import Hamburger from "./Hamburger";
import Fox from "./Fox";

export function Experience() {
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={3}
        shadow-normalBias={0.04}
      />
      <ambientLight intensity={0.5} />

      <mesh scale={2} rotation-x={-Math.PI * 0.5} receiveShadow position-y={-1}>
        <planeGeometry args={[5, 5]} />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
      <Suspense fallback={<Placeholder position-y={0.5} scale={[2, 3, 2]} />}>
        <Hamburger scale={0.5} />
        <Fox />
      </Suspense>
    </>
  );
}
