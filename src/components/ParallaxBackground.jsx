import { motion, useScroll, useSpring, useTransform } from "motion/react";

const ParallaxBackground = () => {
    const {scrollYProgress} = useScroll();
    // spring effect
    const x = useSpring(scrollYProgress, {damping:50});

    // when scrollYprog reaches 50%, mountain3Y will reach 70% along the y-axis
    const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
    const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
    const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
    const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);
  
    return (

    <section className="absolute inset-0 bg-black/40">
        {/* overflow-y: hidden => if an element moves down/up, extra part is clipped */}
      <div className="relative h-screen overflow-y-hidden" >
        {/* backgroung sky */}
        {/* no motion for the farthest sky */}
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "url(/assets/sky.jpg)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        {/* Mountain layer 3 */}
        {/* each time we increase z because we want to put the new images in the front */}
        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: "url(/assets/mountain-3.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y : mountain3Y,
          }}
        />
        {/* Planets */}
        <motion.div
         className="absolute inset-0 -z-30"
         style={{
                backgroundImage : "url(/assets/planets.png)",
                backgroundPosition : "bottom",
                backgroundSize : "cover",
                x: planetsX,
            }}
         />
        {/* Mountain layer 2 */}
        <motion.div 
            className="absolute inset-0 -z-20"
            style={{
                backgroundImage : "url(/assets/mountain-2.png)",
                backgroundPosition : "bottom",
                backgroundSize : "cover",
                y : mountain2Y
            }}
        />
        {/* Mountain layer 1 */}
        <motion.div 
            className="absolute inset-0 -z-10"
            style={{
                backgroundImage : "url(/assets/mountain-1.png)",
                backgroundPosition : "bottom",
                backgroundSize : "cover",
                y : mountain1Y,
            }}
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;
