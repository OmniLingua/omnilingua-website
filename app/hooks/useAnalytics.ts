// hooks/useAnalytics.ts
// This file is responsible for initializing Google Analytics (gtag.js) based on user consent stored in localStorage.
// https://analytics.google.com/analytics/web/provision/#/provision/create

import { useEffect } from "react"

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export function useAnalytics() {
  useEffect(() => {
    const consentRaw = localStorage.getItem("cookie-consent")
    if (!consentRaw) return

    const consent = JSON.parse(consentRaw)
    if (!consent.analytics) return

    // Load gtag script
    const script = document.createElement("script")
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-CP8LHM76VD"
    script.async = true
    document.head.appendChild(script)

    // Init GA config
    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }

    gtag("js", new Date())
    gtag("config", "G-CP8LHM76VD")
  }, [])
}
