// <Canvas> is the container where your 3D world lives.
import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { OrbitControls, Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense, lazy } from "react";
import Loader from "../components/Loader";

// *****for loader testing******
// const MODEL_DELAY_MS = import.meta.env.DEV ? 1200 : 0;
// const Astronaut = lazy(() =>
//   Promise.all([
//     import("../components/Astronaut"),
//     new Promise((resolve) => setTimeout(resolve, MODEL_DELAY_MS)),
//   ]).then(([module]) => ({ default: module.Astronaut }))
// );



const Hero = () => {
  // from 0 to 853 px screen size use this mobile version
  const isMobile = useMediaQuery({maxWidth : 853});

  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start  c-space">
      <HeroText />
      <ParallaxBackground />

      {/* 3d model */}
      <figure
      className="absolute inset-0"
      style={{ width : "100vw" , height : "100vh"}}
      >

      <Canvas camera={{position : [0, 1, 3]}}>
        {/* till the model loads, to improve Ui, we will show a loader component */}
        <Suspense fallback = {<Loader />}>

        <Float>
          <Astronaut 
          // use these values if mobile version else use the default values in astronaut.jsx
          scale = {isMobile && 0.23} 
          position = {isMobile && [0, -1.5, 0]}
          />
        <Rig />
        </Float>
        
          </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
      </figure>
    </section>
  );
};

// make the astronaut move as per our mouse position
function Rig () {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    )
  })
}
export default Hero;
