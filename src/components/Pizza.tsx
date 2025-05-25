// Pizza.tsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Stage } from '@react-three/drei';
import PizzaCanvas from './PizzaModel';

export default function Pizza() {
  return (
<div className="relative w-full h-[400px] md:h-[500px] flex flex-col md:flex-row justify-between items-center px-6 md:px-12">
  <div className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px]">

    <Canvas camera={{ position: [0, 2, 10], fov: 45 }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 10, 7.5]} intensity={1} />
      <Stage environment="city" intensity={0.6} adjustCamera={false}>
        <PizzaCanvas url="/models/pizza.glb" />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
    </Canvas>
  </div>
  </div>

  );
}

