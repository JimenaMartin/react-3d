import { extend, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  useHelper,
  BakeShadows,
  AccumulativeShadows,
  RandomizedLight,
  ContactShadows,
  Sky,
  Environment,
  Lightformer,
  Stage,
} from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useRef } from "react";
import { Perf } from "r3f-perf";
import { useControls } from "leva";

extend({ OrbitControls });

export function Experience() {
  const cubeRef = useRef();
  const sphereRef = useRef();

  const directionalLight = useRef();
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1, "red");

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta * 0.2;
    // const time = state.clock.getElapsedTime();
    // cubeRef.current.position.x = 2 + Math.sin(time);
  });

  const { color, opacity, blur } = useControls("contact shadows", {
    color: "#4b2709",
    opacity: { value: 0.4, min: 0, max: 1 },
    blur: { value: 2.8, min: 0, max: 10 },
  });

  const { envMapIntensity, envMapHeight, envMapRadius, envMapScale } =
    useControls("environment", {
      envMapIntensity: { value: 3.5, min: 0, max: 12 },
      envMapHeight: { value: 7, min: 0, max: 100 },
      envMapRadius: { value: 28, min: 0, max: 1000 },
      envMapScale: { value: 100, min: 0, max: 1000 },
    });

  // const { sunPosition } = useControls("sky", {
  //   sunPosition: {
  //     value: [1, 2, 3],
  //   },
  // });

  // const scene = useThree((state) => state.scene);

  // useEffect(() => {
  //   scene.environmentIntensity = envMapIntensity;
  // }, [envMapIntensity]);

  return (
    <>
      {/* <Environment
        // background
        preset="sunset"
        ground={{
          height: envMapHeight,
          radius: envMapRadius,
          scale: envMapScale,
        }}
        resolution={32}
        files={"./environmentMaps/the_sky_is_on_fire_2k.hdr"}
      > */}
      {/* <color args={["#000"]} attach="background" /> */}
      {/* <Lightformer
          position-z={-5}
          scale={10}
          color="red"
          intensity={10}
          form="ring"
        /> */}

      {/* <mesh position-z={-5} scale={10}>
          <planeGeometry />
          <meshBasicMaterial color={[10, 0, 0]} />
        </mesh> */}
      {/* </Environment> */}
      {/* <BakeShadows /> */}
      {/* <SoftShadows size={25} samples={10} distance={0} /> */}

      <Perf position="top-left" />

      <OrbitControls makeDefault />

      {/* <AccumulativeShadows
        position={[0, -0.99, 0]}
        scale={10}
        color="#316d39"
        opacity={0.8}
        frames={100}
      > */}
      {/* <directionalLight castShadow position={[1, 2, 3]} /> */}
      {/* <RandomizedLight
          position={[1, 2, 3]}
          amount={8}
          radius={1}
          ambient={0.5}
          intensity={3}
          bias={0.001}
        />
      </AccumulativeShadows> */}

      {/* <ContactShadows
        position={[0, 0, 0]}
        scale={10}
        resolution={512}
        far={5}
        color={color}
        opacity={opacity}
        blur={blur}
        frames={1}
      /> */}

      {/* <directionalLight
        castShadow
        ref={directionalLight}
        position={sunPosition}
        intensity={4.5}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
        shadow-camera-near={1}
        shadow-camera-far={10}
      />
      <ambientLight intensity={1.5} /> */}

      {/* <Sky sunPosition={sunPosition} /> */}

      {/* <mesh castShadow ref={sphereRef} position-x={-2} position-y={1}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh
        castShadow
        scale={1}
        ref={cubeRef}
        position={[2, 1, 0]}
        rotation-y={Math.PI * 0.25}
      >
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh> */}
      <Stage
        shadows={{
          type: "contact",
          opacity: 0.2,
          blur: 3,
        }}
        environment="sunset"
        preset="portrait"
        intensity={envMapIntensity}
      >
        <mesh castShadow ref={sphereRef} position-x={-2} position-y={1}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>

        <mesh
          castShadow
          scale={1}
          ref={cubeRef}
          position={[2, 1, 0]}
          rotation-y={Math.PI * 0.25}
        >
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </Stage>

      {/* <mesh scale={2} rotation-x={-Math.PI * 0.5} position-y={0}>
        <planeGeometry args={[5, 5]} />
        <meshStandardMaterial color="greenyellow" />
      </mesh> */}
    </>
  );
}
