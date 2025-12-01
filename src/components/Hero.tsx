"use client";

import HeroBackgroundBoxes from "./HeroBackgroundBoxes";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative h-full md:h-[760px] w-full overflow-hidden" data-hero-container>
      {/* Background Video */}
      <div className="absolute inset-0">
        {isMobile ? (
          <div 
            className="absolute inset-0"
            style={{
              transform: "rotate(90deg)",
              transformOrigin: "center center",
              width: "100vh",
              height: "100vw",
              left: "50%",
              top: "50%",
              marginLeft: "-50vh",
              marginTop: "-50vw"
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            >
              <source src="/videos/Hero-video.mp4" type="video/mp4" />
            </video>
          </div>
        ) : (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/videos/Hero-video.mp4" type="video/mp4" />
          </video>
        )}
      </div>

      {/* White Decorative Boxes */}
      <HeroBackgroundBoxes />
      
      {/* Hero Content - Both text blocks are now part of the white boxes */}
    </div>
  );
}

