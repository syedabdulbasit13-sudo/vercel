import React from 'react';
import { CountryId } from '../types';

interface CountryFlagProps {
  countryId: CountryId | string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withBorder?: boolean;
}

export const CountryFlag: React.FC<CountryFlagProps> = ({
  countryId,
  className = '',
  size = 'md',
  withBorder = true,
}) => {
  const sizeClasses = {
    sm: 'w-6 h-4',
    md: 'w-8 h-5.5',
    lg: 'w-12 h-8',
    xl: 'w-16 h-11',
  }[size];

  const borderClass = withBorder ? 'ring-1 ring-black/15 shadow-sm rounded-sm overflow-hidden inline-block shrink-0' : 'inline-block shrink-0';

  switch (countryId) {
    case 'usa':
      return (
        <span className={`${sizeClasses} ${borderClass} ${className} relative bg-white`}>
          <svg viewBox="0 0 7410 3900" className="w-full h-full object-cover">
            <rect width="7410" height="3900" fill="#B22234" />
            <path d="M0,450H7410M0,1050H7410M0,1650H7410M0,2250H7410M0,2850H7410M0,3450H7410" stroke="#FFF" strokeWidth="300" />
            <rect width="2964" height="2100" fill="#3C3B6E" />
            <g fill="#FFF">
              {/* White stars representation in standard canton grid */}
              {[...Array(9)].map((_, row) => {
                const isEven = row % 2 === 0;
                const count = isEven ? 6 : 5;
                const y = 175 + row * 210;
                return [...Array(count)].map((__, col) => {
                  const x = isEven ? 247 + col * 494 : 494 + col * 494;
                  return (
                    <circle key={`star-${row}-${col}`} cx={x} cy={y} r="65" />
                  );
                });
              })}
            </g>
          </svg>
        </span>
      );

    case 'canada':
      return (
        <span className={`${sizeClasses} ${borderClass} ${className} relative bg-white`}>
          <svg viewBox="0 0 1000 500" className="w-full h-full object-cover">
            {/* Red bands */}
            <rect width="250" height="500" fill="#FF0000" />
            <rect x="250" width="500" height="500" fill="#FFFFFF" />
            <rect x="750" width="250" height="500" fill="#FF0000" />
            {/* Stylized Canadian 11-point maple leaf */}
            <path
              d="M500,80 L525,185 L560,160 L550,210 L615,220 L585,255 L630,290 L535,320 L550,345 L505,340 L503,420 L497,420 L495,340 L450,345 L465,320 L370,290 L415,255 L385,220 L450,210 L440,160 L475,185 Z"
              fill="#FF0000"
            />
          </svg>
        </span>
      );

    case 'australia':
      return (
        <span className={`${sizeClasses} ${borderClass} ${className} relative bg-[#00008B]`}>
          <svg viewBox="0 0 1200 600" className="w-full h-full object-cover">
            {/* Deep navy blue field */}
            <rect width="1200" height="600" fill="#00008B" />
            {/* Union Jack in canton */}
            <g>
              <clipPath id="aus-canton">
                <rect width="600" height="300" />
              </clipPath>
              <g clipPath="url(#aus-canton)">
                <rect width="600" height="300" fill="#00247D" />
                {/* Saltire */}
                <path d="M0,0 L600,300 M600,0 L0,300" stroke="#FFF" strokeWidth="60" />
                <path d="M0,0 L600,300 M600,0 L0,300" stroke="#CF142B" strokeWidth="24" />
                {/* St George Cross */}
                <path d="M300,0 V300 M0,150 H600" stroke="#FFF" strokeWidth="100" />
                <path d="M300,0 V300 M0,150 H600" stroke="#CF142B" strokeWidth="60" />
              </g>
            </g>
            {/* Commonwealth Star (7 points) */}
            <g fill="#FFF">
              <circle cx="300" cy="450" r="60" />
              {/* Southern cross stars */}
              <circle cx="900" cy="120" r="22" />
              <circle cx="1020" cy="240" r="22" />
              <circle cx="900" cy="480" r="28" />
              <circle cx="780" cy="270" r="22" />
              <circle cx="950" cy="330" r="14" />
            </g>
          </svg>
        </span>
      );

    case 'new-zealand':
      return (
        <span className={`${sizeClasses} ${borderClass} ${className} relative bg-[#00247D]`}>
          <svg viewBox="0 0 1200 600" className="w-full h-full object-cover">
            {/* Royal blue field */}
            <rect width="1200" height="600" fill="#00247D" />
            {/* Union Jack in canton */}
            <g>
              <clipPath id="nz-canton">
                <rect width="600" height="300" />
              </clipPath>
              <g clipPath="url(#nz-canton)">
                <rect width="600" height="300" fill="#00247D" />
                <path d="M0,0 L600,300 M600,0 L0,300" stroke="#FFF" strokeWidth="60" />
                <path d="M0,0 L600,300 M600,0 L0,300" stroke="#CC142B" strokeWidth="24" />
                <path d="M300,0 V300 M0,150 H600" stroke="#FFF" strokeWidth="100" />
                <path d="M300,0 V300 M0,150 H600" stroke="#CC142B" strokeWidth="60" />
              </g>
            </g>
            {/* Southern cross (4 red stars with white border) */}
            <g>
              <circle cx="900" cy="140" r="24" fill="#FFF" />
              <circle cx="900" cy="140" r="16" fill="#CC142B" />

              <circle cx="1000" cy="240" r="22" fill="#FFF" />
              <circle cx="1000" cy="240" r="14" fill="#CC142B" />

              <circle cx="900" cy="460" r="28" fill="#FFF" />
              <circle cx="900" cy="460" r="20" fill="#CC142B" />

              <circle cx="800" cy="260" r="22" fill="#FFF" />
              <circle cx="800" cy="260" r="14" fill="#CC142B" />
            </g>
          </svg>
        </span>
      );

    case 'europe':
      return (
        <span className={`${sizeClasses} ${borderClass} ${className} relative bg-[#003399]`}>
          <svg viewBox="0 0 810 540" className="w-full h-full object-cover">
            <rect width="810" height="540" fill="#003399" />
            {/* 12 gold stars in circle */}
            <g fill="#FFCC00">
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30 * Math.PI) / 180;
                const cx = 405 + 160 * Math.sin(angle);
                const cy = 270 - 160 * Math.cos(angle);
                return <circle key={`eu-star-${i}`} cx={cx} cy={cy} r="18" />;
              })}
            </g>
          </svg>
        </span>
      );

    default:
      return <span className="text-xl">🌐</span>;
  }
};
