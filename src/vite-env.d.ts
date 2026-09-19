/// <reference types="vite/client" />

// Google Analytics globals, created by components/CookieConsent.tsx after consent
interface Window {
  dataLayer: unknown[];
  gtag: (...args: unknown[]) => void;
}
