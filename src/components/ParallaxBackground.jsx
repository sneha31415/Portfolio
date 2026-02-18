import React from "react";

const ParallaxBackground = () => {
  return (
    <section className="absolute inset-0 bg-black/40">
      <div>
        {/* backgroung sky */}
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
        <div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: "url(/assets/mountain-3.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        {/* Planets */}
        <div
         className="absolute inset-0 -z-30"
         style={{
                backgroundImage : "url(/assets/planets.png)",
                backgroundPosition : "bottom",
                backgroundSize : "cover",
            }}
         />
        {/* Mountain layer 2 */}
        <div 
            className="absolute inset-0 -z-20"
            style={{
                backgroundImage : "url(/assets/mountain-2.png)",
                backgroundPosition : "bottom",
                backgroundSize : "cover",
            }}
        />
        {/* Mountain layer 1 */}
        <div 
            className="absolute inset-0 -z-10"
            style={{
                backgroundImage : "url(/assets/mountain-1.png)",
                backgroundPosition : "bottom",
                backgroundSize : "cover",
            }}
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;
