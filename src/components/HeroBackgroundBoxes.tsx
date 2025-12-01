"use client";

import { useEffect, useState } from "react";

// We decode AI block content - responsive text size
const WeDecodeAIBlock = ({ viewportSize }: { viewportSize: "sm" | "md" | "lg" | "xl" }) => {
  const textSizes = {
    sm: "text-[45px]",
    md: "text-[45px]",
    lg: "text-[55px]",
    xl: "text-[65px]",
  };

  return (
    <div className="h-full w-full flex items-center justify-start px-3.5 py-2.5 overflow-hidden">
      <h1 className={`font-sans ${textSizes[viewportSize]} font-normal leading-[0.9] tracking-[-0.45px] text-[#001f33] whitespace-nowrap`}>
        We decode AI
      </h1>
    </div>
  );
};

// We make AI understandable block content - responsive text size
const WeMakeAIBlock = ({ viewportSize }: { viewportSize: "sm" | "md" | "lg" | "xl" }) => {
  const textSizes = {
    sm: "text-[18px]",
    md: "text-sm",
    lg: "text-base",
    xl: "text-base",
  };

  return (
    <div className="h-full w-full flex items-start justify-start px-3.5 py-2.5 overflow-hidden">
      <p className={`font-mono ${textSizes[viewportSize]} font-normal uppercase leading-[1.1] text-[#001f33] break-words`}>
        We make AI understandable.
        <br />
        And responsible.
      </p>
    </div>
  );
};

interface Box {
  id: string;
  width: number; // percentage of container width
  height: number; // percentage of container height
  left: number; // percentage of container width
  top: number; // percentage of container height
  rotate?: number;
  scaleY?: number;
  content?: React.ReactNode; // Optional content to render inside the box
  responsive?: {
    // Responsive overrides for different viewport sizes
    sm?: { width?: number; height?: number; left?: number; top?: number };
    md?: { width?: number; height?: number; left?: number; top?: number };
    lg?: { width?: number; height?: number; left?: number; top?: number };
    xl?: { width?: number; height?: number; left?: number; top?: number };
  };
}

// Base container dimensions for percentage calculations
const BASE_WIDTH = 1440;
const BASE_HEIGHT = 760;

// Box positions in percentages (based on 1440px width, 760px height)
// Top values adjusted to start closer to navbar (reduced by ~80px / 10.5%)
const TOP_OFFSET = 80; // Offset to move boxes up
// Mobile constants: text blocks end at ~159px (20px top + 61.144px + 78px)
const MOBILE_TEXT_END_PERCENT = ((20 + 61.144 + 78) / 667) * 100; // ~23.85%
const MOBILE_AVAILABLE_SPACE = 100 - MOBILE_TEXT_END_PERCENT; // ~76.15%

// Desktop: boxes range from (100 - TOP_OFFSET) to BASE_HEIGHT
// Calculate the scale to fit desktop box layout into mobile available space
const DESKTOP_BOX_START = ((100 - TOP_OFFSET) / BASE_HEIGHT) * 100;
const DESKTOP_AVAILABLE_SPACE = 100 - DESKTOP_BOX_START;
const MOBILE_SCALE = MOBILE_AVAILABLE_SPACE / DESKTOP_AVAILABLE_SPACE;

const baseBoxes: Box[] = [
  { 
    id: "1", 
    width: (258.707 / BASE_WIDTH) * 100, 
    height: (70.214 / BASE_HEIGHT) * 100, 
    left: (20.33 / BASE_WIDTH) * 100, 
    top: ((100 - TOP_OFFSET) / BASE_HEIGHT) * 100,
    responsive: {
      sm: {
        top: MOBILE_TEXT_END_PERCENT,
        height: (70.214 / BASE_HEIGHT) * 100 * MOBILE_SCALE,
      },
    },
  },
  { 
    id: "2", 
    width: (109.405 / BASE_WIDTH) * 100, 
    height: (229.908 / BASE_HEIGHT) * 100, 
    left: (1040.84 / BASE_WIDTH) * 100, 
    top: ((100 - TOP_OFFSET) / BASE_HEIGHT) * 100,
    responsive: {
      sm: {
        top: MOBILE_TEXT_END_PERCENT + ((((100 - TOP_OFFSET) / BASE_HEIGHT) * 100) - DESKTOP_BOX_START) * MOBILE_SCALE,
        height: (229.908 / BASE_HEIGHT) * 100 * MOBILE_SCALE,
      },
    },
  },
  { 
    id: "3", 
    width: (259.25 / BASE_WIDTH) * 100, 
    height: (130.008 / BASE_HEIGHT) * 100, 
    left: (781.61 / BASE_WIDTH) * 100, 
    top: ((329.91 - TOP_OFFSET) / BASE_HEIGHT) * 100,
    responsive: {
      sm: {
        top: MOBILE_TEXT_END_PERCENT + ((((329.91 - TOP_OFFSET) / BASE_HEIGHT) * 100) - DESKTOP_BOX_START) * MOBILE_SCALE,
        height: (130.008 / BASE_HEIGHT) * 100 * MOBILE_SCALE,
      },
    },
  },
  { 
    id: "4", 
    width: (109.398 / BASE_WIDTH) * 100, 
    height: (126.532 / BASE_HEIGHT) * 100, 
    left: (1040.86 / BASE_WIDTH) * 100, 
    top: ((459.92 - TOP_OFFSET) / BASE_HEIGHT) * 100,
    responsive: {
      sm: {
        top: MOBILE_TEXT_END_PERCENT + ((((459.92 - TOP_OFFSET) / BASE_HEIGHT) * 100) - DESKTOP_BOX_START) * MOBILE_SCALE,
        height: (126.532 / BASE_HEIGHT) * 100 * MOBILE_SCALE,
      },
    },
  },
  { 
    id: "5", 
    width: (344.994 / BASE_WIDTH) * 100, 
    height: (30.28 / BASE_HEIGHT) * 100, 
    left: (781.2 / BASE_WIDTH) * 100, 
    top: ((789.72 - TOP_OFFSET) / BASE_HEIGHT) * 100,
    responsive: {
      sm: {
        top: MOBILE_TEXT_END_PERCENT + ((((789.72 - TOP_OFFSET) / BASE_HEIGHT) * 100) - DESKTOP_BOX_START) * MOBILE_SCALE,
        height: (30.28 / BASE_HEIGHT) * 100 * MOBILE_SCALE,
      },
    },
  },
  { 
    id: "6", 
    width: (208.68 / BASE_WIDTH) * 100, 
    height: (30.28 / BASE_HEIGHT) * 100, 
    left: (461.46 / BASE_WIDTH) * 100, 
    top: ((789.72 - TOP_OFFSET) / BASE_HEIGHT) * 100,
    responsive: {
      sm: {
        top: MOBILE_TEXT_END_PERCENT + ((((789.72 - TOP_OFFSET) / BASE_HEIGHT) * 100) - DESKTOP_BOX_START) * MOBILE_SCALE,
        height: (30.28 / BASE_HEIGHT) * 100 * MOBILE_SCALE,
      },
    },
  },
  { 
    id: "7", 
    width: (82.331 / BASE_WIDTH) * 100, 
    height: (30.28 / BASE_HEIGHT) * 100, 
    left: (20.33 / BASE_WIDTH) * 100, 
    top: ((789.72 - TOP_OFFSET) / BASE_HEIGHT) * 100,
    responsive: {
      sm: {
        top: MOBILE_TEXT_END_PERCENT + ((((789.72 - TOP_OFFSET) / BASE_HEIGHT) * 100) - DESKTOP_BOX_START) * MOBILE_SCALE,
        height: (30.28 / BASE_HEIGHT) * 100 * MOBILE_SCALE,
      },
    },
  },
  { 
    id: "8", 
    width: (82.332 / BASE_WIDTH) * 100, 
    height: (96.979 / BASE_HEIGHT) * 100, 
    left: (20.33 / BASE_WIDTH) * 100, 
    top: ((343.92 - TOP_OFFSET) / BASE_HEIGHT) * 100,
    responsive: {
      sm: {
        top: MOBILE_TEXT_END_PERCENT + ((((343.92 - TOP_OFFSET) / BASE_HEIGHT) * 100) - DESKTOP_BOX_START) * MOBILE_SCALE,
        height: (96.979 / BASE_HEIGHT) * 100 * MOBILE_SCALE,
      },
    },
  },
  { 
    id: "9", 
    width: (80.174 / BASE_WIDTH) * 100, 
    height: (190.602 / BASE_HEIGHT) * 100, 
    left: (1259.66 / BASE_WIDTH) * 100, 
    top: ((395.83 - TOP_OFFSET) / BASE_HEIGHT) * 100,
    responsive: {
      sm: {
        top: MOBILE_TEXT_END_PERCENT + ((((395.83 - TOP_OFFSET) / BASE_HEIGHT) * 100) - DESKTOP_BOX_START) * MOBILE_SCALE,
        height: (190.602 / BASE_HEIGHT) * 100 * MOBILE_SCALE,
      },
    },
  },
  { 
    id: "10", 
    width: (109.405 / BASE_WIDTH) * 100, 
    height: (203.282 / BASE_HEIGHT) * 100, 
    left: (1150.25 / BASE_WIDTH) * 100, 
    top: ((586.44 - TOP_OFFSET) / BASE_HEIGHT) * 100,
    responsive: {
      sm: {
        top: MOBILE_TEXT_END_PERCENT + ((586.44 - TOP_OFFSET) / BASE_HEIGHT) * 100 - ((100 - TOP_OFFSET) / BASE_HEIGHT) * 100,
        height: (203.282 / BASE_HEIGHT) * 100 * MOBILE_SCALE,
      },
    },
  },
  { 
    id: "11", 
    width: (109.405 / BASE_WIDTH) * 100, 
    height: (65.931 / BASE_HEIGHT) * 100, 
    left: (1150.25 / BASE_WIDTH) * 100, 
    top: ((329.91 - TOP_OFFSET) / BASE_HEIGHT) * 100,
    responsive: {
      sm: {
        top: MOBILE_TEXT_END_PERCENT + ((329.91 - TOP_OFFSET) / BASE_HEIGHT) * 100 - ((100 - TOP_OFFSET) / BASE_HEIGHT) * 100,
      },
    },
  },
  { 
    id: "12", 
    width: (80.163 / BASE_WIDTH) * 100, 
    height: (233.562 / BASE_HEIGHT) * 100, 
    left: (1339.84 / BASE_WIDTH) * 100, 
    top: ((586.44 - TOP_OFFSET) / BASE_HEIGHT) * 100,
    responsive: {
      sm: {
        top: MOBILE_TEXT_END_PERCENT + ((586.44 - TOP_OFFSET) / BASE_HEIGHT) * 100 - ((100 - TOP_OFFSET) / BASE_HEIGHT) * 100,
        height: (203.282 / BASE_HEIGHT) * 100 * MOBILE_SCALE,
      },
    },
  },
  { 
    id: "13", 
    width: (80.163 / BASE_WIDTH) * 100, 
    height: (295.84 / BASE_HEIGHT) * 100, 
    left: (1339.84 / BASE_WIDTH) * 100, 
    top: ((100 - TOP_OFFSET) / BASE_HEIGHT) * 100,
    responsive: {
      sm: {
        top: MOBILE_TEXT_END_PERCENT,
        height: (70.214 / BASE_HEIGHT) * 100 * MOBILE_SCALE,
      },
    },
  },
  // Flipped boxes
  { 
    id: "14", 
    width: (109.405 / BASE_WIDTH) * 100, 
    height: (99.901 / BASE_HEIGHT) * 100, 
    left: (20.33 / BASE_WIDTH) * 100, 
    top: ((517.36 - TOP_OFFSET) / BASE_HEIGHT) * 100, 
    rotate: 180, 
    scaleY: -1,
    responsive: {
      sm: {
        top: MOBILE_TEXT_END_PERCENT + ((((517.36 - TOP_OFFSET) / BASE_HEIGHT) * 100) - DESKTOP_BOX_START) * MOBILE_SCALE,
        height: (99.901 / BASE_HEIGHT) * 100 * MOBILE_SCALE,
      },
    },
  },
  { 
    id: "15", 
    width: (244.665 / BASE_WIDTH) * 100, 
    height: (186.96 / BASE_HEIGHT) * 100, 
    left: (462.87 / BASE_WIDTH) * 100, 
    top: ((459.92 - TOP_OFFSET) / BASE_HEIGHT) * 100, 
    rotate: 180, 
    scaleY: -1,
    responsive: {
      sm: {
        top: MOBILE_TEXT_END_PERCENT + ((((459.92 - TOP_OFFSET) / BASE_HEIGHT) * 100) - DESKTOP_BOX_START) * MOBILE_SCALE,
        height: (186.96 / BASE_HEIGHT) * 100 * MOBILE_SCALE,
      },
    },
  },
  { 
    id: "16", 
    width: (160.222 / BASE_WIDTH) * 100, 
    height: (126.528 / BASE_HEIGHT) * 100, 
    left: (302.64 / BASE_WIDTH) * 100, 
    top: ((663.28 - TOP_OFFSET) / BASE_HEIGHT) * 100, 
    rotate: 180, 
    scaleY: -1,
    responsive: {
      sm: {
        top: MOBILE_TEXT_END_PERCENT + ((((663.28 - TOP_OFFSET) / BASE_HEIGHT) * 100) - DESKTOP_BOX_START) * MOBILE_SCALE,
        height: (126.528 / BASE_HEIGHT) * 100 * MOBILE_SCALE,
      },
    },
  },
  { 
    id: "17", 
    width: (236.335 / BASE_WIDTH) * 100, 
    height: (272.365 / BASE_HEIGHT) * 100, 
    left: (102.66 / BASE_WIDTH) * 100, 
    top: ((517.36 - TOP_OFFSET) / BASE_HEIGHT) * 100, 
    rotate: 180, 
    scaleY: -1,
    responsive: {
      sm: {
        top: MOBILE_TEXT_END_PERCENT + ((((517.36 - TOP_OFFSET) / BASE_HEIGHT) * 100) - DESKTOP_BOX_START) * MOBILE_SCALE,
        height: (272.365 / BASE_HEIGHT) * 100 * MOBILE_SCALE,
      },
    },
  },
  { 
    id: "18", 
    width: (111.056 / BASE_WIDTH) * 100, 
    height: (329.809 / BASE_HEIGHT) * 100, 
    left: (670.15 / BASE_WIDTH) * 100, 
    top: ((459.92 - TOP_OFFSET) / BASE_HEIGHT) * 100, 
    rotate: 180, 
    scaleY: -1,
    responsive: {
      sm: {
        top: MOBILE_TEXT_END_PERCENT + ((((459.92 - TOP_OFFSET) / BASE_HEIGHT) * 100) - DESKTOP_BOX_START) * MOBILE_SCALE,
        height: (329.809 / BASE_HEIGHT) * 100 * MOBILE_SCALE,
      },
    },
  },
  // We decode AI block - responsive positioning and sizing
  // Values are in percentages relative to container (1440px width, 760px height base)
  {
    id: "we-decode-ai",
    width: (500 / BASE_WIDTH) * 100, // ~34.7% for xl (wider to fit text)
    height: (89.169 / BASE_HEIGHT) * 100, // ~11.7%
    left: (120.33 / BASE_WIDTH) * 100, // ~8.4% for xl
    top: ((120 - TOP_OFFSET + 20) / BASE_HEIGHT) * 100, // Moved down a bit
    content: null, // Will be set dynamically based on viewport
    responsive: {
      sm: {
        // Mobile: 375px - positioned near top with slight margin
        width: (335 / 375) * 100, // 335px width
        height: (61.144 / 667) * 100, // Height
        left: (20 / 375) * 100, // 20px from left
        top: (20 / 667) * 100, // 20px from top (slight margin)
      },
      md: {
        // Tablet: 768px
        width: (420 / 768) * 100, // ~55% of tablet width (wider)
        height: (75 / 1024) * 100,
        left: (40 / 768) * 100, // ~5.2% from left
        top: ((90 - 50 + 20) / 1024) * 100, // Moved down a bit
      },
      lg: {
        // Desktop: 1024px
        width: (460 / 1024) * 100, // ~45% of desktop width (wider)
        height: (82 / 768) * 100,
        left: (70 / 1024) * 100, // ~6.8% from left
        top: ((110 - 60 + 25) / 768) * 100, // Moved down a bit
      },
      xl: {
        // Large Desktop: 1440px+
        width: (500 / 1440) * 100, // ~34.7% of xl width (wider)
        height: (89.169 / 760) * 100, // ~11.7%
        left: (120.33 / 1440) * 100, // ~8.4% from left
        top: ((120 - TOP_OFFSET + 20) / 760) * 100, // Moved down a bit
      },
    },
  },
  // We make AI understandable block - responsive positioning and sizing
  {
    id: "we-make-ai",
    width: (450 / BASE_WIDTH) * 100, // Base width (narrower than "We decode AI")
    height: (78 / BASE_HEIGHT) * 100, // Base height for subtitle
    left: (120.33 / BASE_WIDTH) * 100, // Same left as "We decode AI"
    top: ((120 - TOP_OFFSET + 20) / BASE_HEIGHT) * 100 + (89.169 / BASE_HEIGHT) * 100, // Positioned directly below "We decode AI" with no gap
    content: null, // Will be set dynamically based on viewport
    responsive: {
      sm: {
        width: (335 / 375) * 100, // Same width as "We decode AI" on mobile
        height: (78 / 667) * 100, // Height
        left: (20 / 375) * 100, // Same left as "We decode AI"
        top: (20 / 667) * 100 + (61.144 / 667) * 100, // Directly below "We decode AI" box
      },
      md: {
        width: (380 / 768) * 100, // Narrower than "We decode AI"
        height: (60 / 1024) * 100,
        left: (40 / 768) * 100,
        top: ((90 - 50 + 20) / 1024) * 100 + (75 / 1024) * 100, // Directly below with no gap
      },
      lg: {
        width: (420 / 1024) * 100, // Narrower than "We decode AI"
        height: (65 / 768) * 100,
        left: (70 / 1024) * 100,
        top: ((110 - 60 + 25) / 768) * 100 + (82 / 768) * 100, // Directly below with no gap
      },
      xl: {
        width: (450 / 1440) * 100, // Narrower than "We decode AI"
        height: (78 / 760) * 100,
        left: (120.33 / 1440) * 100,
        top: ((120 - TOP_OFFSET + 20) / 760) * 100 + (89.169 / 760) * 100, // Directly below with no gap
      },
    },
  },
];

export default function HeroBackgroundBoxes() {
  const [viewportSize, setViewportSize] = useState<"sm" | "md" | "lg" | "xl">("xl");

  useEffect(() => {
    const updateViewport = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setViewportSize("sm");
      } else if (width < 768) {
        setViewportSize("sm");
      } else if (width < 1024) {
        setViewportSize("md");
      } else if (width < 1440) {
        setViewportSize("lg");
      } else {
        setViewportSize("xl");
      }
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  // Don't hide boxes on mobile - they contain the hero text

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {baseBoxes.map((box) => {
        const transforms: string[] = [];
        if (box.rotate) {
          transforms.push(`rotate(${box.rotate}deg)`);
        }
        if (box.scaleY) {
          transforms.push(`scaleY(${box.scaleY})`);
        }

        // Get responsive values if available, fallback to xl values, then base
        const responsive = box.responsive?.[viewportSize] ?? box.responsive?.xl;
        const width = responsive?.width ?? box.width;
        const height = responsive?.height ?? box.height;
        const left = responsive?.left ?? box.left;
        const top = responsive?.top ?? box.top;

        // Get content - for text blocks, render with viewport size
        const content = box.id === "we-decode-ai" ? (
          <WeDecodeAIBlock viewportSize={viewportSize} />
        ) : box.id === "we-make-ai" ? (
          <WeMakeAIBlock viewportSize={viewportSize} />
        ) : box.content;

        const style: React.CSSProperties = {
          position: "absolute",
          width: `${width}%`,
          height: `${height}%`,
          left: `${left}%`,
          top: `${top}%`,
          backgroundColor: "white",
          transform: transforms.length > 0 ? transforms.join(" ") : undefined,
          transformOrigin: "center",
        };

        return (
          <div key={box.id} style={style}>
            {content}
          </div>
        );
      })}
    </div>
  );
}

