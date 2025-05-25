// PizzaModel.tsx
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function PizzaCanvas({ url }: { url: string }) {
  const gltf = useLoader(GLTFLoader, url);
  
  return (
  <primitive
  object={gltf.scene}
  scale={[9, 9, 9]}           // More pizza = more happiness
  position={[0, -1.5, 0]}     // Tweak this till center looks good
/>

  );
}




