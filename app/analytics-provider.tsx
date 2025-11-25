'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { pageview, trackLinkClick } from '../lib/gtag'

export function AnalyticsProvider() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // pageview
  useEffect(() => {
    if (!pathname) return
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
    pageview(url)
  }, [pathname, searchParams])

  // click <a>
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a')
      if (!target) return
      const href = (target as HTMLAnchorElement).href
      const text = (target as HTMLAnchorElement).innerText || ''
      trackLinkClick(href, text)
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}
