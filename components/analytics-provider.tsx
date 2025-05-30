"use client"

import { useAnalytics } from "@/app/hooks/useAnalytics"

export default function AnalyticsProvider() {
  useAnalytics()
  return null
}
