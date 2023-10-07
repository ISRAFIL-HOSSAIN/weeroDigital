"use client"; 

import React,{useEffect,useState} from "react";

const BlobComponent: React.FC = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  useEffect(()=>{
    const screenWidth = window.innerWidth; 
    setIsLargeScreen(screenWidth >= 1024); 
    const handleResize = ()=>{
      const newScreenWidth = window.innerWidth; 
      setIsLargeScreen(newScreenWidth >= 1024);
    }
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  },[]);
  const largeScreenViewBox = "300 0 500 500"; // Adjust as needed
  const smallScreenViewBox = "0 100 400 350"; // Adjust as needed
  const viewBox = isLargeScreen ? largeScreenViewBox : smallScreenViewBox;
  return (
    <div className="absolute inset-0">
      <svg viewBox={viewBox} className="w-full h-full">
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#270346" }} />
          <stop offset="100%" style={{ stopColor: "#2E0150" }} />
        </linearGradient>

        <filter id="shadow" width="170%" height="170%">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="8"
            floodColor="#37003E"
            floodOpacity="0.8"
          />
        </filter>

        <path
          fill="url(#gradient)"
          filter="url(#shadow)"
        >
          <animate
            attributeName="d"
            dur="15s"
            repeatCount="indefinite"
            values="M430,304Q418,358,380,404.5Q342,451,284.5,430Q227,409,182,394.5Q137,380,109,340Q81,300,63.5,245Q46,190,83.5,145.5Q121,101,171,74Q221,47,273.5,65.5Q326,84,378,109.5Q430,135,436,192.5Q442,250,430,304Z;
                  M469,314Q449,378,382,385.5Q315,393,265.5,440Q216,487,160.5,452Q105,417,65,366.5Q25,316,19,248Q13,180,77.5,153Q142,126,181,83Q220,40,284,37.5Q348,35,378,91.5Q408,148,448.5,199Q489,250,469,314Z;
                  M430,305.5Q423,361,376,392Q329,423,275,437Q221,451,177.5,417Q134,383,82.5,348.5Q31,314,36.5,251.5Q42,189,74,136Q106,83,164,69.5Q222,56,274.5,68.5Q327,81,369.5,113.5Q412,146,424.5,198Q437,250,430,305.5Z;
                  M408,303Q414,356,383.5,415.5Q353,475,289,450.5Q225,426,170.5,415Q116,404,96.5,352.5Q77,301,59,245Q41,189,72,135Q103,81,159,44Q215,7,270,46Q325,85,383.5,105.5Q442,126,422,188Q402,250,408,303Z;
                  M434.5,313Q447,376,384.5,391.5Q322,407,273.5,414.5Q225,422,163.5,421.5Q102,421,91,360.5Q80,300,48,240.5Q16,181,69,141.5Q122,102,170,65Q218,28,269.5,61Q321,94,358.5,125Q396,156,409,203Q422,250,434.5,313Z;
                  M435,307Q427,364,380,398.5Q333,433,276,449.5Q219,466,159,445Q99,424,55.5,372Q12,320,32,256Q52,192,75,133.5Q98,75,159.5,62.5Q221,50,286,39Q351,28,364,98Q377,168,410,209Q443,250,435,307Z;
                  M434.5,313Q447,376,384.5,391.5Q322,407,273.5,414.5Q225,422,163.5,421.5Q102,421,91,360.5Q80,300,48,240.5Q16,181,69,141.5Q122,102,170,65Q218,28,269.5,61Q321,94,358.5,125Q396,156,409,203Q422,250,434.5,313Z;
                  M408,303Q414,356,383.5,415.5Q353,475,289,450.5Q225,426,170.5,415Q116,404,96.5,352.5Q77,301,59,245Q41,189,72,135Q103,81,159,44Q215,7,270,46Q325,85,383.5,105.5Q442,126,422,188Q402,250,408,303Z;
                  "
          ></animate>
        </path>
      </svg>
    </div>
  );
};

export{BlobComponent}
