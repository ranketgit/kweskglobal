import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import { NextRequest, NextResponse } from 'next/server'

const intlMiddleware = createMiddleware(routing)

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request)

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