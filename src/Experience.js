import { extend } from "@react-three/fiber";
import {
  OrbitControls,
  TransformControls,
  PivotControls,
  Html,
  Text,
  Float,
  MeshReflectorMaterial
} from "@react-three/drei";
import { useRef } from "react";

extend({ OrbitControls });

export function Experience() {
  const cubeRef = useRef();
  const sphereRef = useRef()

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />
      <PivotControls
        anchor={[0, 0, 0]}
        depthTest={false}
        lineWidth={4}
        scale={120}
        fixed
      >
        <mesh ref={sphereRef} position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
          <Html distanceFactor={8} center position={[1, 1, 0]} wrapperClass="label" occlude={[sphereRef, cubeRef]}>
            That's a sphere
          </Html>
        </mesh>
      </PivotControls>

      <mesh
        ref={cubeRef}
        position-x={2}
        scale={1.5}
        rotation-y={Math.PI * 0.25}
      >
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
      <TransformControls object={cubeRef} mode="translate" />

      <mesh scale={10} rotation-x={-Math.PI * 0.5} position-y={-1}>
        <planeGeometry args={[5, 5]} />
        {/* <meshStandardMaterial color="greenyellow" /> */}
        <MeshReflectorMaterial resolution={512} blur={[1000, 1000]} mixBlur={1} mirror={0.75} color="greenyellow" />
      </mesh>
      <Float>
        <Text speed={3} color="salmon" position-y={2} maxWidth={2} textAlign="center">
          I LOVE R3F
        </Text>
      </Float>
    </>
  );
}
