export default function Sphere() {
  return (
    <mesh position={[0, 0, 0]} >
      <coneGeometry 
      attach="geometry"
      scale={[0, 0, 0]}
      args={[1, 3, 12]} />
      <meshStandardMaterial color={0x00ff00} />
    </mesh>
  );
}