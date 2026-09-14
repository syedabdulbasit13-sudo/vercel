import React from 'react';

interface CompanyLogoProps {
  variant?: 'icon' | 'horizontal' | 'full';
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  inverted?: boolean; // when on navy background
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  variant = 'horizontal',
  className = '',
  size = 'md',
  inverted = false,
}) => {
  // Emblem colors
  const redColor = '#dc2626'; // Cardinal Red
  const navyColor = inverted ? '#ffffff' : '#0a192f'; // White if on deep navy background, else Navy Blue
  const centerColor = inverted ? '#ffffff' : '#0a192f';

  // Render SVG Emblem (The 25-circle hexagonal network from the user's logo)
  const renderEmblem = (svgSize = 44) => (
    <svg
      viewBox="0 0 300 300"
      width={svgSize}
      height={svgSize}
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g transform="translate(150, 150) scale(0.95)">
        {/* Center Circle */}
        <circle cx="0" cy="0" r="16" fill={centerColor} />

        {/* Top Branch (Red: 0 deg) */}
        <g transform="rotate(0)">
          <rect x="-7.5" y="-120" width="15" height="60" rx="7.5" fill={redColor} />
          <circle cx="0" cy="-60" r="15.5" fill={redColor} />
          <circle cx="0" cy="-120" r="15.5" fill={redColor} />
          <circle cx="-39" cy="-78" r="15.5" fill={redColor} />
          <circle cx="39" cy="-78" r="15.5" fill={redColor} />
        </g>

        {/* Bottom Branch (Red: 180 deg) */}
        <g transform="rotate(180)">
          <rect x="-7.5" y="-120" width="15" height="60" rx="7.5" fill={redColor} />
          <circle cx="0" cy="-60" r="15.5" fill={redColor} />
          <circle cx="0" cy="-120" r="15.5" fill={redColor} />
          <circle cx="-39" cy="-78" r="15.5" fill={redColor} />
          <circle cx="39" cy="-78" r="15.5" fill={redColor} />
        </g>

        {/* Top-Right Branch (Navy/White: 60 deg) */}
        <g transform="rotate(60)">
          <rect x="-7.5" y="-120" width="15" height="60" rx="7.5" fill={navyColor} />
          <circle cx="0" cy="-60" r="15.5" fill={navyColor} />
          <circle cx="0" cy="-120" r="15.5" fill={navyColor} />
          <circle cx="-39" cy="-78" r="15.5" fill={navyColor} />
          <circle cx="39" cy="-78" r="15.5" fill={navyColor} />
        </g>

        {/* Bottom-Right Branch (Navy/White: 120 deg) */}
        <g transform="rotate(120)">
          <rect x="-7.5" y="-120" width="15" height="60" rx="7.5" fill={navyColor} />
          <circle cx="0" cy="-60" r="15.5" fill={navyColor} />
          <circle cx="0" cy="-120" r="15.5" fill={navyColor} />
          <circle cx="-39" cy="-78" r="15.5" fill={navyColor} />
          <circle cx="39" cy="-78" r="15.5" fill={navyColor} />
        </g>

        {/* Bottom-Left Branch (Navy/White: 240 deg) */}
        <g transform="rotate(240)">
          <rect x="-7.5" y="-120" width="15" height="60" rx="7.5" fill={navyColor} />
          <circle cx="0" cy="-60" r="15.5" fill={navyColor} />
          <circle cx="0" cy="-120" r="15.5" fill={navyColor} />
          <circle cx="-39" cy="-78" r="15.5" fill={navyColor} />
          <circle cx="39" cy="-78" r="15.5" fill={navyColor} />
        </g>

        {/* Top-Left Branch (Navy/White: 300 deg) */}
        <g transform="rotate(300)">
          <rect x="-7.5" y="-120" width="15" height="60" rx="7.5" fill={navyColor} />
          <circle cx="0" cy="-60" r="15.5" fill={navyColor} />
          <circle cx="0" cy="-120" r="15.5" fill={navyColor} />
          <circle cx="-39" cy="-78" r="15.5" fill={navyColor} />
          <circle cx="39" cy="-78" r="15.5" fill={navyColor} />
        </g>
      </g>
    </svg>
  );

  // Icon only
  if (variant === 'icon') {
    const iconSizes = {
      xs: 24,
      sm: 32,
      md: 44,
      lg: 56,
      xl: 80,
      custom: 44,
    };
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {renderEmblem(iconSizes[size])}
      </div>
    );
  }

  // Full stacked lockup (identical to the uploaded image: emblem on top, red title below)
  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center group ${className}`}>
        <div className="p-2">
          {renderEmblem(size === 'xl' ? 140 : size === 'lg' ? 110 : 80)}
        </div>
        <div className="mt-2.5">
          <span className="block font-black text-red-600 tracking-wide uppercase text-sm sm:text-base lg:text-lg leading-tight font-sans">
            CAREER RECRUIT AND IMMIGRATIONS CONSULTANCY
          </span>
        </div>
      </div>
    );
  }

  // Horizontal variant (default: emblem on left, bold enlarged title on right)
  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      <div className="p-1 rounded-xl bg-white shadow-sm ring-1 ring-slate-200/80 shrink-0">
        {renderEmblem(size === 'lg' ? 52 : size === 'sm' ? 36 : 44)}
      </div>
      <div className="flex flex-col text-left">
        <span
          className={`font-black uppercase tracking-tight leading-none ${
            inverted ? 'text-white' : 'text-[#0a192f]'
          } ${
            size === 'lg'
              ? 'text-lg sm:text-xl'
              : size === 'sm'
              ? 'text-xs sm:text-sm'
              : 'text-sm sm:text-base'
          }`}
        >
          CAREER RECRUIT
        </span>
        <span
          className={`font-black uppercase tracking-wider mt-0.5 leading-none ${
            inverted ? 'text-red-400' : 'text-red-600'
          } ${
            size === 'lg'
              ? 'text-xs sm:text-sm'
              : size === 'sm'
              ? 'text-[10px]'
              : 'text-[11px] sm:text-xs'
          }`}
        >
          AND IMMIGRATIONS CONSULTANCY
        </span>
      </div>
    </div>
  );
};
