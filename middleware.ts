import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest): NextResponse {
  const response = NextResponse.next();
  const country = request.headers.get('x-vercel-ip-country') ?? 'global';
  response.headers.set('x-user-region', country === 'PK' ? 'pk' : 'global');
  return response;
}

export const config = {
  matcher: ['/((?!_next|images|icons|favicon.ico|robots.txt|sitemap.xml|ads.txt|.*\\..*).*)'],
};