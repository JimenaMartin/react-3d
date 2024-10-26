import { extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useControls, button } from "leva";
import { Perf } from "r3f-perf";

extend({ OrbitControls });

export function Experience() {
  const cubeRef = useRef();
  const sphereRef = useRef();

  const { position, color, visible } = useControls("sphere", {
    position: {
      value: { x: -2, y: 0 },
      step: 0.01,
      joystick: "invertY",
    },
    color: "#ff0000",
    visible: true,
    clickMe: button(() => {
      console.log("clicked!");
    }),
    choice: {
      options: ["a", "b", "c"],
    },
  });

  const { scale } = useControls("cube", {
    scale: {
      value: 2,
      min: 0,
      max: 5,
      step: 0.1,
    },
  });

  const { perfVisible } = useControls("perf", {
    perfVisible: true,
  });

  return (
    <>
      {perfVisible && <Perf position="top-left" />}

      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <mesh
        ref={sphereRef}
        visible={visible}
        position={[position.x, position.y, 0]}
      >
        <sphereGeometry />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh
        scale={scale}
        ref={cubeRef}
        position={2}
        rotation-y={Math.PI * 0.25}
      >
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh scale={10} rotation-x={-Math.PI * 0.5} position-y={-1}>
        <planeGeometry args={[5, 5]} />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
