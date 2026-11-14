/**
 * Design Tokens extracted from:
 * - Google Labs Opal (https://opal.google/)
 * - Google DeepMind Genie (https://deepmind.google/models/genie/)
 */

export const googleLabsTokens = {
  colors: {
    backgroundLight: '#ffffff',
    backgroundDark: '#131314',
    surfaceLight: '#f8fafd',
    surfaceDark: '#1e1f20',
    surfaceHoverLight: '#f0f4f9',
    surfaceHoverDark: '#282a2c',
    googleBlue: '#0b57d0',
    googleBlueHover: '#0842a0',
    googleBlueLight: '#d3e3fd',
    googleBlueContainer: '#041e49',
    textPrimaryLight: '#1f1f1f',
    textPrimaryDark: '#e3e3e3',
    textSecondaryLight: '#444746',
    textSecondaryDark: '#c4c7c5',
    borderSubtleLight: '#e0e2ec',
    borderSubtleDark: '#444746',
    geminiGradient: 'linear-gradient(135deg, #1ba1e2 0%, #7c4dff 50%, #f43f5e 100%)',
    geminiSparkle: '#4285f4',
    nodeHeaderBg: '#edf2fc',
    nodeHeaderBgDark: '#202124',
    success: '#137333',
    warning: '#ea8600',
    error: '#c5221f',
  },
  typography: {
    fontFamily: '"Google Sans", "Google Sans Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontDisplay: '"Google Sans Display", "Google Sans", sans-serif',
    fontCode: '"Google Sans Code", "Roboto Mono", monospace',
  },
  radius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    pill: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(60,64,67,0.1), 0 1px 3px 1px rgba(60,64,67,0.08)',
    md: '0 4px 8px 3px rgba(60,64,67,0.08), 0 1px 3px 0 rgba(60,64,67,0.15)',
    lg: '0 6px 12px 4px rgba(60,64,67,0.08), 0 2px 4px 0 rgba(60,64,67,0.15)',
    nodeSelected: '0 0 0 2px #0b57d0, 0 8px 16px rgba(11,87,208,0.2)',
  }
} as const;

export const deepmindTokens = {
  colors: {
    deepBlack: '#000000',
    surfaceCard: '#0e0e10',
    surfaceElevated: '#141418',
    surfaceHover: '#1c1c22',
    borderSubtle: '#1f1f23',
    borderGlowing: '#33333d',
    neonCyan: '#00e5ff',
    neonCyanGlow: 'rgba(0, 229, 255, 0.4)',
    cyberPurple: '#a855f7',
    cyberPurpleGlow: 'rgba(168, 85, 247, 0.35)',
    electricBlue: '#3b82f6',
    matrixGreen: '#22c55e',
    dangerRed: '#ef4444',
    textPrimary: '#ffffff',
    textSecondary: '#9ca3af',
    textMuted: '#6b7280',
    badgeBg: 'rgba(255, 255, 255, 0.06)',
    hudOverlay: 'rgba(10, 10, 14, 0.75)',
  },
  typography: {
    fontFamily: '"Google Sans Flex", "Google Sans", -apple-system, BlinkMacSystemFont, sans-serif',
    fontMono: '"JetBrains Mono", "Roboto Mono", monospace',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '14px',
    xl: '20px',
    pill: '9999px',
  },
  shadows: {
    glowCyan: '0 0 25px rgba(0, 229, 255, 0.25)',
    glowPurple: '0 0 25px rgba(168, 85, 247, 0.25)',
    card: '0 8px 32px 0 rgba(0, 0, 0, 0.65)',
    hud: '0 4px 20px rgba(0,0,0,0.85), inset 0 0 0 1px rgba(255,255,255,0.1)',
  }
} as const;
