import { useFrame, extend, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import CustomObject from "./CustomObject";

extend({ OrbitControls})

export  function Experience() {

  const cubeRef = useRef()
  const groupRef = useRef()

  const {camera, gl} = useThree()

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;
    // const angle = state.clock.elapsedTime
    // state.camera.position.x = Math.sin(angle) * 8
    // state.camera.position.z = Math.cos(angle) * 8
    // state.camera.lookAt(0, 0, 0)
  })
    
    return (
      <>
        <orbitControls args={[camera, gl.domElement]} />

        <directionalLight position={[ 1, 2, 3]} intensity={4.5}  />
        <ambientLight intensity={1.5} />

        <group ref={groupRef}>
          <mesh position-x={-2}>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
          </mesh>
          <mesh
            ref={cubeRef}
            scale={1.5}
            position-x={2}
            rotation-y={Math.PI * 0.25}
          >
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
          </mesh>
        </group>
        <mesh scale={10} rotation-x={-Math.PI * 0.5} position-y={-1}>
          <planeGeometry args={[5, 5]} />
          <meshStandardMaterial color="greenyellow" />
        </mesh>


        <CustomObject />
      </>
    );
}