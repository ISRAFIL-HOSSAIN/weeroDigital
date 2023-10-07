'use client';
// Import necessary types from React and other libraries
import React, { useState, useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { random } from "maath";
import * as THREE from "three";

// Define the type for the Stars component's props
interface StarsProps {
  spherePositions: Float32Array;
  ref?:any;
}

const Stars: React.FC<StarsProps> = ({ spherePositions }) => {
  const ref = useRef<THREE.Points | null>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={spherePositions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#7B0BBD"
          size={0.01}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};


const StarsCanvas: React.FC = () => {
  const [radius] = useState(1.8);
  const sphere = useMemo(
    () => random.inSphere(new Float32Array(3000), { radius }) as Float32Array,
    [radius]
  );

  return (
    <div className="w-full h-full absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars spherePositions={sphere} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
