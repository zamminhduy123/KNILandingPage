import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from '@/src/i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request) {
  const { pathname, search } = request.nextUrl;
  const host = request.headers.get('host') || '';
  const proto = request.headers.get('x-forwarded-proto');

  // 301 Permanent Redirect HTTP -> HTTPS and www -> non-www to consolidate link equity onto https://kni.vn
  if (proto === 'http' || host.startsWith('www.')) {
    const cleanHost = host.replace(/^www\./, '') || 'kni.vn';
    const redirectUrl = `https://${cleanHost}${pathname}${search}`;
    return NextResponse.redirect(redirectUrl, 301);
  }

  return intlMiddleware(request);
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};