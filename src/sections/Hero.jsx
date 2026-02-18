import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";



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
        <Astronaut 
        // use these values if mobile version else use the default values in astronaut.jsx
        scale = {isMobile && 0.23} 
        position = {isMobile && [0, -1.5, 0]}
        />
        <OrbitControls />
      </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
