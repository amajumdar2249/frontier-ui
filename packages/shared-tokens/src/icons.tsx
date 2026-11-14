import React from 'react';

export const DeepMindLogo: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="24" height="24" rx="5" fill="#000000" />
    <path d="M4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12Z" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="1 2" />
    <path d="M8 8H16V16H8V8Z" fill="#00E5FF" fillOpacity="0.8" />
    <circle cx="12" cy="12" r="2.5" fill="#A855F7" />
  </svg>
);

export const GoogleLabsLogo: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M9 3H15M10 3V8.5L5.5 16.5C4.7 17.9 5.7 19.5 7.3 19.5H16.7C18.3 19.5 19.3 17.9 18.5 16.5L14 8.5V3" stroke="#0B57D0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 15H17" stroke="#0B57D0" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="10" cy="12" r="1" fill="#4285F4" />
    <circle cx="13" cy="14" r="1.2" fill="#34A853" />
    <circle cx="14" cy="11" r="0.8" fill="#EA4335" />
  </svg>
);

export const GeminiSparkle: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 2C12 7.52285 7.52285 12 2 12C7.52285 12 12 16.4771 12 22C12 16.4771 16.4771 12 22 12C16.4771 12 12 7.52285 12 2Z" fill="url(#gemini-grad)" />
    <defs>
      <linearGradient id="gemini-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1BA1E2" />
        <stop offset="0.5" stopColor="#7C4DFF" />
        <stop offset="1" stopColor="#F43F5E" />
      </linearGradient>
    </defs>
  </svg>
);

export const OpalFlowLogo: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="24" height="24" rx="6" fill="#0B57D0" />
    <circle cx="8" cy="8" r="2.5" fill="#FFFFFF" />
    <circle cx="16" cy="16" r="2.5" fill="#FFFFFF" />
    <circle cx="16" cy="8" r="2.5" fill="#93C5FD" />
    <path d="M8 8L16 8L16 16" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const GenieGamepadIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="6" y1="12" x2="10" y2="12" />
    <line x1="8" y1="10" x2="8" y2="14" />
    <line x1="15" y1="13" x2="15.01" y2="13" />
    <line x1="18" y1="11" x2="18.01" y2="11" />
    <rect x="2" y="6" width="20" height="12" rx="6" />
  </svg>
);
