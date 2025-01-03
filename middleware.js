import { NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

let locales = ['bn', 'en'];
let defultLocale = 'en';

function getLocale(request) {
  const acceptedLanguage = request.headers.get('accept-language') ?? undefined;
  let headers = { 'accept-language': acceptedLanguage };
  let language = new Negotiator({ headers }).language();
  return match(language, locales, defultLocale);
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  const pathNameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathNameIsMissingLocale) {
    const locale = getLocale(request);

    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    '/((?!api|assets|.*\\..*|_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
};
