import Image from "next/image";
import HeroBackgroundBoxes from "./HeroBackgroundBoxes";

interface HeroProps {
  useVideo?: boolean;
  videoSrc?: string;
}

export default function Hero({ useVideo = false, videoSrc }: HeroProps) {
  return (
    <div className="relative h-[760px] w-full overflow-hidden" data-hero-container>
      {/* Background - Image or Video */}
      <div className="absolute inset-0">
        {useVideo && videoSrc ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <Image
            src="/images/hero-background.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        )}
      </div>

      {/* White Decorative Boxes */}
      <HeroBackgroundBoxes />
      
      {/* Hero Content - Both text blocks are now part of the white boxes */}
    </div>
  );
}

