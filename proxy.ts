import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import { NextRequest, NextResponse } from 'next/server'

const intlMiddleware = createMiddleware(routing)

export default function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl

  // 1. KILL THE INDEXED SHIT
  // Check if '?_g=' exists in the URL
  if (searchParams.has('_g')) {
    const url = request.nextUrl.clone()
    
    // Remove the garbage param
    url.searchParams.delete('_g')
    
    // Optional: If you want to kill ALL query params on the homepages specifically:
    if (pathname === '/en' || pathname === '/fr') {
      url.search = ''; 
    }

    // Force a 301 Permanent Redirect to the clean URL
    return NextResponse.redirect(url, 301)
  }

  // 2. RUN EXISTING INT-INTL LOGIC
  const response = intlMiddleware(request)

  // x-default hreflang
  const pathWithoutLocale = pathname.replace(/^\/(en|fr)/, '') || ''
  response.headers.set('x-default-url', `https://kwesk.com/fr${pathWithoutLocale}`)

  // 3. YOUR EXISTING 307 -> 301 CONVERTER
  if (response.status === 307 || response.status === 308) {
    const location = response.headers.get('location')

    if (location) {
      const url = new URL(location, request.url)
      const permanentResponse = NextResponse.redirect(url, 301)
      
      response.headers.forEach((value, key) => {
        if (key.toLowerCase() !== 'location') {
          permanentResponse.headers.set(key, value)
        }
      })

      return permanentResponse
    }
  }

  return response
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
}