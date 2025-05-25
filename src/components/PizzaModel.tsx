import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

const PizzaModel: React.FC = () => {
  const model = useGLTF('/models/pizza.glb');

  return (
    <group scale={[0.5, 0.5, 0.5]}>
      <primitive object={model.scene} />
    </group>
  );
};

useGLTF.preload('/models/pizza.glb');

export default function PizzaCanvas() {
  return (
    <div className="w-full h-screen">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.3} intensity={1.5} />
        <OrbitControls />
        <Suspense fallback={<span>Loading Pizza...</span>}>
          <PizzaModel />
        </Suspense>
      </Canvas>
    </div>
  );
}

