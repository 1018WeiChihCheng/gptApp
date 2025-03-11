import React from 'react';

const MushroomCharacter = () => {
  return (
    <div className="mushroom-character">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 200 200" 
        width="180" 
        height="180"
      >
        <defs>
          <radialGradient id="capGrad" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#ff6b6b" />
            <stop offset="100%" stopColor="#ee5253" />
          </radialGradient>
        </defs>
        <g id="mushroom" transform="translate(100, 70)">
          {/* 蘑菇帽子和腳 */}
          <path d="M-50,0 C-50,-40 50,-40 50,0 L30,70 C30,85 -30,85 -30,70 Z" fill="url(#capGrad)" />
          <rect x="-15" y="0" width="30" height="70" fill="#d1a06c" />
          
          {/* 眼睛 */}
          <circle cx="-25" cy="-15" r="8" fill="white" />
          <circle cx="-25" cy="-15" r="4" fill="black">
            <animate 
              attributeName="cy" 
              values="-15;-13;-15" 
              dur="3s" 
              repeatCount="indefinite" 
            />
          </circle>
          
          <circle cx="25" cy="-15" r="8" fill="white" />
          <circle cx="25" cy="-15" r="4" fill="black">
            <animate 
              attributeName="cy" 
              values="-15;-13;-15" 
              dur="3s"
              repeatCount="indefinite" 
            />
          </circle>
          
          {/* 笑容 */}
          <path d="M-15,15 C-5,25 5,25 15,15" stroke="black" strokeWidth="2" fill="none">
            <animate 
              attributeName="d" 
              values="M-15,15 C-5,25 5,25 15,15;M-15,12 C-5,22 5,22 15,12;M-15,15 C-5,25 5,25 15,15" 
              dur="5s" 
              repeatCount="indefinite" 
            />
          </path>
          
          {/* 眉毛 */}
          <path d="M-35,-30 C-30,-35 -20,-35 -15,-30" stroke="black" strokeWidth="1.5" fill="none" />
          <path d="M15,-30 C20,-35 30,-35 35,-30" stroke="black" strokeWidth="1.5" fill="none" />
          
          {/* 蘑菇帽子上的圓點 */}
          <circle cx="-30" cy="-25" r="5" fill="white" opacity="0.7" />
          <circle cx="10" cy="-30" r="4" fill="white" opacity="0.7" />
          <circle cx="35" cy="-15" r="3" fill="white" opacity="0.7" />
          <circle cx="-10" cy="-35" r="3.5" fill="white" opacity="0.7" />
        </g>
      </svg>
    </div>
  );
};

export default MushroomCharacter;