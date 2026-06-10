import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.[a-zA-Z0-9]+$/;
const SKIP_PREFIXES = ['/_next/', '/images/', '/icons/', '/public/'];
const SKIP_PATHS = ['/favicon.ico', '/robots.txt', '/sitemap.xml', '/ads.txt'];

function shouldSkip(pathname: string): boolean {
  return PUBLIC_FILE.test(pathname) || SKIP_PATHS.includes(pathname) || SKIP_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

export function middleware(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;
  if (shouldSkip(pathname)) return NextResponse.next();
  const country = request.headers.get('x-vercel-ip-country');
  const isPakistan = country === 'PK';
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-user-region', isPakistan ? 'pk' : 'global');
  if (isPakistan && pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/pk';
    const response = NextResponse.rewrite(url, { request: { headers: requestHeaders } });
    response.headers.set('x-user-region', 'pk');
    return response;
  }
  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set('x-user-region', isPakistan ? 'pk' : 'global');
  return response;
}

export const config = { matcher: ['/((?!_next|images|icons|public|favicon.ico|robots.txt|sitemap.xml|ads.txt|.*\\..*).*)'] };
