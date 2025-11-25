export const GA_MEASUREMENT_ID = 'G-BPR61DVHL5'

export const pageview = (url: string) => {
  if (!GA_MEASUREMENT_ID) return
  ;(window as any).gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  })
}

export const trackLinkClick = (href: string, text: string) => {
  if (!GA_MEASUREMENT_ID) return
  ;(window as any).gtag('event', 'click_link', {
    link_url: href,
    link_text: text,
  })
}
