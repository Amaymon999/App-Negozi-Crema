import { NextRequest, NextResponse } from 'next/server';

export function GET(req: NextRequest) {
  const role = req.nextUrl.searchParams.get('role') ?? 'user';
  const redirect = role === 'admin' ? '/admin' : role === 'shop' ? '/shop' : '/app';
  const res = NextResponse.redirect(new URL(redirect, req.url));
  res.cookies.set('role', role, { httpOnly: false, path: '/' });
  return res;
}
