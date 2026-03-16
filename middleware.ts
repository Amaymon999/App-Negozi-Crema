import { NextRequest, NextResponse } from 'next/server';

const roleRoutes: Record<string, string> = {
  '/admin': 'admin',
  '/shop': 'shop',
  '/app': 'user'
};

export function middleware(req: NextRequest) {
  const role = req.cookies.get('role')?.value;
  const path = req.nextUrl.pathname;

  const entry = Object.entries(roleRoutes).find(([route]) => path.startsWith(route));
  if (entry && role !== entry[1]) {
    const url = new URL('/auth/sign-in', req.url);
    url.searchParams.set('next', path);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/shop/:path*', '/app/:path*']
};
