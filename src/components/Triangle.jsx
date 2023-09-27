import * as THREE from "three" // <---
import React, { useRef, useEffect } from "react";

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
const Triangle = () => {
  const ref = useRef(null) // <---

  // useEffect(() => {
  //   cameraRef?.current?.lookAt(groupRef.current?.position);
  // }, []);

  // useEffect(() => {
  //   ref.current.setAttribute( 'position', new THREE.BufferAttribute(new Float32Array(vertices), 3));
  // }) // <---

  const vertices = new Float32Array([
    -1.0, -1.0,  1.0, // v0
	 1.0, -1.0,  1.0, // v1
	 1.0,  1.0,  1.0, // v2

	 1.0,  1.0,  1.0, // v3
	-1.0,  1.0,  1.0, // v4

  -1.0, -1.0,  1.0, // v0
  1.0, -1.0,  1.0, // v1
  1.0,  1.0,  1.0, // v2

  1.0,  1.0,  1.0, // v3
 -2.0,  2.0,  2.0, // v4

 -1.0, -1.0,  1.0, // v0
 1.0, -1.0,  1.0, // v1
 1.0,  1.0,  1.0, // v2

 1.0,  1.0,  1.0, // v3
-1.0,  1.0,  1.0, // v4
  ]);

  return (
    <>
      <mesh position={[0, 0, 0]}>
        <bufferGeometry attach="geometry">
           <bufferAttribute
            
             attachObject={['attributes', 'position']}
             attach="attributes-position"
             args={[vertices, 3]}
            //  position={[1, 1, 1]}
           />
        </bufferGeometry>
        <meshBasicMaterial args={[{ color: 'hsla(50, 33%, 25%, .45)' }]}  wireframe={false}  side={THREE.DoubleSide}/>
      </mesh>
      <ambientLight args={["white", 0.25]} />
      <pointLight position={[2, 2, 2]} />
    </>
  );
};

export default Triangle;