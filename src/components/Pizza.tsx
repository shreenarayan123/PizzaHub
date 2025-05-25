import { Suspense } from 'react';

import PizzaModel from './PizzaModel';
import PizzaCanvas from './PizzaModel';

export default function Pizza() {
  return (
    <>
    
  <PizzaCanvas />
    </>
    // <Canvas>
    //   <ambientLight intensity={0.5} />
    //   <directionalLight position={[5, 5, 5]} intensity={1} />
    //   <spotLight position={[10, 10, 10]} angle={0.3} intensity={1.5} />
      
    //   <PizzaModel />
    // </Canvas>
  );
}

