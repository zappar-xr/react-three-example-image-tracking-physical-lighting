import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';
import {
 ZapparCamera, ImageTracker, ZapparCanvas, BrowserCompatibility,
} from '@zappar/zappar-react-three-fiber';

import targetFile from './assets/example-tracking-image.zpt';

// Lights
function Lights() {
  const mesh:React.MutableRefObject<any> = useRef();

  useFrame(() => {
    // Move Light
    const time = Date.now() * 0.0005;
    mesh.current.position.y = mesh.current.position.x + Math.cos(time);
  });

  return (
    <mesh ref={mesh} position={[0.5, 1.5, 1]} scale={[0.1, 0.1, 0.1]} castShadow>
      <sphereBufferGeometry />
      <meshStandardMaterial emissive={new THREE.Color(0xffffee)} />
      <pointLight position={[0, 0, 0]} intensity={0.5} castShadow />
    </mesh>
  );
}

// Stage
function Stage() {
  return (
    <group>
      <mesh castShadow receiveShadow>
        <planeBufferGeometry args={[2, 2]} />
        <meshStandardMaterial color="lightblue" />
      </mesh>

      <mesh castShadow receiveShadow rotation={[Math.PI / 2, 0, 0]} position={[0, 1, 0.5]}>
        <planeBufferGeometry args={[2, 1]} />
        <meshStandardMaterial color="lightblue" />
      </mesh>

      <mesh castShadow receiveShadow rotation={[0, Math.PI / 2, 0]} position={[-1, 0, 0.5]}>
        <planeBufferGeometry args={[1, 2]} />
        <meshStandardMaterial color="lightblue" />
      </mesh>
    </group>
  );
}

// Sphere
function Sphere() {
  const mesh:React.MutableRefObject<any> = useRef();

   useFrame(() => {
     // Move Light
     const time = Date.now() * 0.0005;
     mesh.current.position.x = mesh.current.position.y + Math.cos(time) + 0.25;
   });

  return (
    <mesh ref={mesh} castShadow receiveShadow scale={[0.2, 0.2, 0.2]} position={[0, 0, 0.5]}>
      <sphereBufferGeometry />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

function App() {
    // Set up states
    const [visibleState, setVisibleState] = useState(false);

    return (
      <>
        <BrowserCompatibility />
        {/* Setup Zappar Canvas */}
        <ZapparCanvas shadowMap gl={{ antialias: true }}>
          {/* Setup Zappar Camera */}
          <ZapparCamera />
          {/* Setup Zappar Image Tracker, passing our target file */}
          <ImageTracker
            onNotVisible={() => { setVisibleState(false); }}
            onNewAnchor={(anchor) => console.log(`New anchor ${anchor.id}`)}
            onVisible={() => { setVisibleState(true); }}
            targetImage={targetFile}
            visible={visibleState}
          >
            {/* Setup Content */}
            <Stage />
            <Sphere />
            <Lights />

          </ImageTracker>
          {/* Normal directional light */}
          <directionalLight position={[2.5, 8, 5]} intensity={1.5} castShadow />
        </ZapparCanvas>
      </>
    );
}

export default App;

