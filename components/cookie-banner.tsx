"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cookie, Settings, X } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    const newPreferences = {
      essential: true,
      analytics: true,
      marketing: true,
    }
    setPreferences(newPreferences)
    localStorage.setItem("cookie-consent", JSON.stringify(newPreferences))
    setShowBanner(false)
  }

  const acceptSelected = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences))
    setShowBanner(false)
  }

  const rejectAll = () => {
    const newPreferences = {
      essential: true,
      analytics: false,
      marketing: false,
    }
    setPreferences(newPreferences)
    localStorage.setItem("cookie-consent", JSON.stringify(newPreferences))
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:max-w-md">
      <Card className="shadow-lg border-2 animate-in slide-in-from-bottom-5 duration-500">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Cookie className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-sm mb-2">Cookie Preferences</h3>
              <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                We use cookies to enhance your experience, analyze site usage, and assist in our marketing efforts. You
                can customize your preferences or accept all cookies.
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <Button size="sm" onClick={acceptAll} className="flex-1">
                    Accept All
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="outline">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          <Cookie className="h-5 w-5" />
                          Cookie Preferences
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <Label htmlFor="essential" className="text-sm font-medium">
                                Essential Cookies
                              </Label>
                              <p className="text-xs text-muted-foreground">Required for website functionality</p>
                            </div>
                            <Switch id="essential" checked={true} disabled />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <Label htmlFor="analytics" className="text-sm font-medium">
                                Analytics Cookies
                              </Label>
                              <p className="text-xs text-muted-foreground">Help us improve our website</p>
                            </div>
                            <Switch
                              id="analytics"
                              checked={preferences.analytics}
                              onCheckedChange={(checked) => setPreferences((prev) => ({ ...prev, analytics: checked }))}
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <Label htmlFor="marketing" className="text-sm font-medium">
                                Marketing Cookies
                              </Label>
                              <p className="text-xs text-muted-foreground">Personalize ads and content</p>
                            </div>
                            <Switch
                              id="marketing"
                              checked={preferences.marketing}
                              onCheckedChange={(checked) => setPreferences((prev) => ({ ...prev, marketing: checked }))}
                            />
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" onClick={acceptSelected} className="flex-1">
                            Save Preferences
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <Button size="sm" variant="ghost" onClick={rejectAll} className="text-xs">
                  Reject All
                </Button>
              </div>
            </div>
            <Button size="sm" variant="ghost" onClick={rejectAll} className="p-1 h-auto">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
