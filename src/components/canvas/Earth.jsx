import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from "../Loader"


const Earth = () => {
  const earth = useGLTF('./ufo/scene.gltf')
  return (
    <primitive object={earth.scene}
    scale={0.15}
    rotation={[6.1, -1, -0.2]}
   />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov:55,
        near:0.1,
        far:200,
        postion:[-4,3,6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
      <OrbitControls 
      autoRotate 
      enableZoom={false}
      maxPolarAngle={Math.PI /2}
      minPolarAngle={Math.PI /2}/>
      <Earth/>
      </Suspense>
    </Canvas>
  )
}


export default EarthCanvas