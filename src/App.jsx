import { Canvas } from "@react-three/fiber";
import "./App.css";
import Cone from "./components/Cone";
import { OrbitControls } from "@react-three/drei";
import { Vector2 } from "three";
import Triangle from "./components/Triangle";

function App() {
  // const vertices = [
  //   new THREE.Vector3(0, 20, 0),
  //   new THREE.Vector3(0, 0, 0),
  //   new THREE.Vector3(20, 0, 0)
  // ];
  return (
    <div className="App">
      <Canvas
        camera={{
          fov: 90,
          position: [0, 0, 3],
        }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight position={[1, 1, 1]} intensity={0.8} />
         {/* <Cone />  */}
         <Triangle />
      <OrbitControls /> 
     
      </Canvas>
      
    </div>
  );
}

export default App;