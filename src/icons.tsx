import type { SVGProps } from "react";
type P = SVGProps<SVGSVGElement>;

export const LogoIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <rect x="2" y="7" width="20" height="14" rx="2" stroke="#fff" strokeWidth="1.8" />
    <path d="M16 7V5a4 4 0 0 0-8 0v2" stroke="#fff" strokeWidth="1.8" />
  </svg>
);

export const DashIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" />
    <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" />
    <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" />
    <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

export const TenderIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path
      d="M9 12h6M9 16h6M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

export const EsgIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path
      d="M7 16l4-4 4 4 4-4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const StaffIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.6" />
    <path d="M2 21c0-4 3-7 7-7s7 3 7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M19 8v4M17 10h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const ProfileIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M3 21c0-4 4-7 9-7s9 3 9 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="12" cy="8" r="5" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

export const BellIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path
      d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LogoutIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" width="14" height="14" {...p}>
    <path
      d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CheckIcon = (p: P) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M20 6 9 17l-5-5" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ClockIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const WarnIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M10.3 3.7 2 18h20L13.7 3.7a2 2 0 0 0-3.4 0z" stroke="currentColor" strokeWidth="1.6" />
    <path d="M12 10v4M12 17h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);
