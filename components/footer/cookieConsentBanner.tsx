"use client";

import React, { useEffect, useMemo, useState } from "react";

/**
 * CookieConsentBanner.tsx
 * ------------------------------------------------------
 * GDPR-friendly consent banner for Next.js (App Router).
 * - Defaults to Google Consent Mode v2 = DENIED for all
 * - Lets users Accept All / Reject All / Customize
 * - Persists choice in localStorage
 * - Updates gtag consent live without page reload
 * - Respects previously-saved choice; banner stays hidden
 * - Minimal styling that matches your theme (#1B5E20)
 *
 * Drop <CookieConsentBanner /> anywhere in your root layout body.
 *
 * You must already be injecting the Consent Mode default in <head>:
 *  gtag('consent','default',{ ad_storage:'denied', ad_user_data:'denied', ad_personalization:'denied', analytics_storage:'denied' })
 * (You added this earlier in app/layout.tsx with strategy="beforeInteractive")
 */

// ---- Types ----
export type ConsentKeys = "analytics_storage" | "ad_storage" | "ad_user_data" | "ad_personalization";
export type ConsentState = Record<ConsentKeys, "granted" | "denied">;

const DEFAULTS: ConsentState = {
  analytics_storage: "denied",
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
};

const LS_KEY = "floremoval_consent_v2";

function readStoredConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (
      parsed &&
      ["analytics_storage", "ad_storage", "ad_user_data", "ad_personalization"].every((k) =>
        ["granted", "denied"].includes(parsed[k])
      )
    ) {
      return parsed as ConsentState;
    }
  } catch (_) {}
  return null;
}

function writeStoredConsent(c: ConsentState) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(c));
  } catch (_) {}
}

function updateGtagConsent(consent: ConsentState) {
  if (typeof window === "undefined") return;
  const w = window as any;
  if (typeof w.gtag !== "function") return;
  w.gtag("consent", "update", {
    analytics_storage: consent.analytics_storage,
    ad_storage: consent.ad_storage,
    ad_user_data: consent.ad_user_data,
    ad_personalization: consent.ad_personalization,
  });
}

export default function CookieConsentBanner() {
  const [open, setOpen] = useState(false);
  const [consent, setConsent] = useState<ConsentState>(DEFAULTS);
  const [customizing, setCustomizing] = useState(false);

  // On mount: if stored consent exists, apply it and keep banner hidden.
  useEffect(() => {
    const stored = readStoredConsent();
    if (stored) {
      setConsent(stored);
      updateGtagConsent(stored);
      setOpen(false);
    } else {
      // No choice yet → show banner
      setOpen(true);
    }
  }, []);

  const allGranted = useMemo(
    () => Object.values(consent).every((v) => v === "granted"),
    [consent]
  );

  function setAll(state: "granted" | "denied") {
    const next: ConsentState = {
      analytics_storage: state,
      ad_storage: state,
      ad_user_data: state,
      ad_personalization: state,
    };
    setConsent(next);
    writeStoredConsent(next);
    updateGtagConsent(next);
    setOpen(false);
  }

  function saveCustom() {
    writeStoredConsent(consent);
    updateGtagConsent(consent);
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-title"
      className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-4xl rounded-t-2xl border border-gray-200 bg-white shadow-2xl"
      style={{ boxShadow: "0 -10px 30px rgba(0,0,0,0.12)" }}
    >
      <div className="p-4 sm:p-6">
        <h2 id="cookie-title" className="text-lg sm:text-xl font-semibold text-[#1B5E20]">
          We value your privacy
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          We use cookies to run the site and measure effectiveness. Advertising and personalization
          are off by default in the EU until you choose. You can change your choice anytime.
        </p>

        {/* Quick actions */}
        {!customizing && (
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
            <button
              onClick={() => setAll("granted")}
              className="w-full sm:w-auto rounded-xl bg-[#1B5E20] px-4 py-2.5 text-white font-semibold hover:bg-[#155d28]"
            >
              Accept all
            </button>
            <button
              onClick={() => setAll("denied")}
              className="w-full sm:w-auto rounded-xl border px-4 py-2.5 font-semibold hover:bg-[#f0f8f2]"
            >
              Reject all
            </button>
            <button
              onClick={() => setCustomizing(true)}
              className="w-full sm:w-auto rounded-xl border px-4 py-2.5 font-semibold hover:bg-[#f0f8f2]"
            >
              Customize
            </button>
          </div>
        )}

        {/* Custom panel */}
        {customizing && (
          <div className="mt-4 space-y-3">
            <ToggleRow
              title="Analytics (anonymous)"
              desc="Helps us understand site performance."
              value={consent.analytics_storage === "granted"}
              onChange={(v) =>
                setConsent((c) => ({ ...c, analytics_storage: v ? "granted" : "denied" }))
              }
            />
            <ToggleRow
              title="Ads storage"
              desc="Allows storing/reading advertising cookies (for Google Ads)."
              value={consent.ad_storage === "granted"}
              onChange={(v) => setConsent((c) => ({ ...c, ad_storage: v ? "granted" : "denied" }))}
            />
            <ToggleRow
              title="Ad user data"
              desc="Sends user data to Google for ad measurement and personalization decisions."
              value={consent.ad_user_data === "granted"}
              onChange={(v) => setConsent((c) => ({ ...c, ad_user_data: v ? "granted" : "denied" }))}
            />
            <ToggleRow
              title="Ad personalization"
              desc="Use data to personalize ads (remarketing)."
              value={consent.ad_personalization === "granted"}
              onChange={(v) =>
                setConsent((c) => ({ ...c, ad_personalization: v ? "granted" : "denied" }))
              }
            />

            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <button
                onClick={saveCustom}
                className="w-full sm:w-auto rounded-xl bg-[#1B5E20] px-4 py-2.5 text-white font-semibold hover:bg-[#155d28]"
              >
                Save choices
              </button>
              <button
                onClick={() => {
                  setConsent(DEFAULTS);
                  setCustomizing(false);
                }}
                className="w-full sm:w-auto rounded-xl border px-4 py-2.5 font-semibold hover:bg-[#f0f8f2]"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        <p className="mt-3 text-xs text-gray-500">
          By clicking “Accept all”, you agree to store cookies on your device to enhance site
          navigation, analyze usage, and assist our marketing efforts. See our Privacy Policy for
          more details.
        </p>
      </div>
    </div>
  );
}

function ToggleRow({
  title,
  desc,
  value,
  onChange,
}: {
  title: string;
  desc: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-xl border p-3">
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-xs text-gray-600">{desc}</div>
      </div>
      <Switch checked={value} onChange={onChange} />
    </div>
  );
}

function Switch({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative h-7 w-12 rounded-full transition border ${
        checked ? "bg-[#1B5E20] border-[#1B5E20]" : "bg-gray-200"
      }`}
    >
      <span
        className={`absolute top-1/2 -translate-y-1/2 left-1 transition-transform h-5 w-5 rounded-full bg-white shadow ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}
