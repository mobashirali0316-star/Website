import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function SEO({ title, description }) {
  const location = useLocation()
  const siteUrl = 'https://mobashirali.in'
  const canonicalUrl = `${siteUrl}${location.pathname}`

  useEffect(() => {
    // 1. Update Title
    const fullTitle = `${title} | Mobashir Ali`
    document.title = fullTitle

    // 2. Update Description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', description)

    // 3. Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', canonicalUrl)

    // 4. Update Open Graph Meta Tags
    updateMetaTag('og:title', fullTitle)
    updateMetaTag('og:description', description)
    updateMetaTag('og:url', canonicalUrl)
    updateMetaTag('og:type', 'website')

    // 5. Update Twitter Meta Tags
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', fullTitle)
    updateMetaTag('twitter:description', description)
  }, [title, description, canonicalUrl])

  const updateMetaTag = (property, value) => {
    let tag = document.querySelector(`meta[property="${property}"]`) || document.querySelector(`meta[name="${property}"]`)
    if (!tag) {
      tag = document.createElement('meta')
      if (property.startsWith('og:')) {
        tag.setAttribute('property', property)
      } else {
        tag.setAttribute('name', property)
      }
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', value)
  }

  return null
}
