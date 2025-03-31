// import { NextResponse } from "next/server";
// import { match } from "@formatjs/intl-localematcher";
// import Negotiator from "negotiator";

// const locales = ["en", "vn"];
// const defaultLocale = "vn";

// export function middleware(request) {
//   const { pathname } = request.nextUrl;

//   // Skip middleware for API routes, static files, etc.
//   if (
//     pathname.startsWith("/api") ||
//     pathname.startsWith("/_next") ||
//     pathname === "/favicon.ico"
//   ) {
//     return NextResponse.next();
//   }

//   // Extract the locale from the pathname
//   const pathLocale = pathname.split("/")[1];
//   const locale = locales.includes(pathLocale) ? pathLocale : null;

//   // If no locale is present or the locale is invalid, redirect to the default locale
//   if (!locale) {
//     const headers = { "accept-language": request.headers.get("accept-language") || "" };
//     const languages = new Negotiator({ headers }).languages();
//     const matchedLocale = match(languages, locales, defaultLocale);

//     // Redirect to the default locale with the current pathname
//     request.nextUrl.pathname = `/${matchedLocale}${pathname === "/" ? "" : pathname}`;
//     return NextResponse.redirect(request.nextUrl);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };

import createMiddleware from 'next-intl/middleware';
import {routing} from './src/i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};