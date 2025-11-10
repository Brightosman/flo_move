// lib/gtag.ts
declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

export function reportQuoteConversion() {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', 'conversion', {
    send_to: 'AW-17307716049/Dl5mCPfPzbsbENGT-7xA',
  });
}
