import { useGLTF, Clone } from "@react-three/drei";

export default function Helmet() {
  const model = useGLTF("/hamburger-draco.glb");

  return (
    <>
      <Clone object={model.scene} scale={0.35} position-y={-1} />
      <Clone object={model.scene} scale={0.35} position-y={2} />
      <Clone object={model.scene} scale={0.35} position-y={0.5} />
    </>
  );
}

useGLTF.preload("/hamburger-draco.glb");
