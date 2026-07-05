"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import Logo from "@/public/images/logo.webp";

export default function Header() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Determine the other locale
  const otherLocale = locale === "vn" ? "en" : "vn";

  // Function to construct the new URL with the new locale
  const getLocalizedPath = (newLocale: string) => {
    const pathSegments = pathname.split("/").filter((segment) => segment);
    const pathWithoutLocale =
      pathSegments.length > 0 && pathSegments[0] === locale
        ? `/${pathSegments.slice(1).join("/")}`
        : pathname;
    return `/${newLocale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;
  };

  // Function to determine if a link is active
  const isActiveLink = (href: string) => {
    const pathSegments = pathname.split("/").filter((segment) => segment);
    const pathWithoutLocale =
      pathSegments.length > 0 && pathSegments[0] === locale
        ? `/${pathSegments.slice(1).join("/")}`
        : pathname;

    if (href === "/") {
      return pathWithoutLocale === "/" || pathWithoutLocale === `/${locale}`;
    }

    return pathWithoutLocale === href;
  };

  const navClassName = (ref: string) => {
    return `${
      isActiveLink(ref) ? "text-orange-600 font-bold" : "text-slate-600 font-semibold"
    } hover:text-slate-900 text-sm transition-colors duration-200`;
  };

  const mobileNavClassName = (ref: string) => {
    return `${
      isActiveLink(ref) ? "text-orange-600 font-bold" : "text-slate-600 font-semibold"
    } hover:text-slate-900 text-base transition-colors duration-200 block py-2.5`;
  };

  return (
    <header className="bg-white border-b border-slate-100 fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src={Logo}
                width={42}
                height={42}
                alt="KNI Logo"
                className="hover:opacity-90 transition-opacity"
                priority
              />
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 focus:outline-none p-1.5 hover:bg-slate-50 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links for Desktop */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className={navClassName("/")}>
              {t("home")}
            </Link>
            <Link href={`/${locale}/blog`} className={navClassName("/blog")}>
              {t("knowledge")}
            </Link>
            <Link href={`/${locale}/free-testas`} className={navClassName("/free-testas")}>
              {t("freeTest")}
            </Link>
            <Link href={`/${locale}/contact`} className={navClassName("/contact")}>
              {t("contact")}
            </Link>
          </nav>

          {/* CTA Button + Language Toggle for Desktop */}
          <div className="hidden md:flex md:items-center md:gap-6">
            <Link
              href={getLocalizedPath(otherLocale)}
              prefetch={false}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors py-2"
              aria-label={locale === 'vn' ? 'Switch to English' : 'Chuyển sang tiếng Việt'}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
              {locale === "vn" ? "VN" : "EN"}
            </Link>
            <Link
              href={`/${locale}/consultation`}
              className="bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-orange-700 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              {t("signup")}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute top-[72px] left-0 right-0 bg-white border-b border-slate-100 shadow-lg shadow-slate-200/40 px-5 py-6 z-40 transition-all duration-300`}
      >
        <nav className="flex flex-col space-y-2">
          <Link href="/" onClick={() => setIsOpen(false)} className={mobileNavClassName("/")}>
            {t("home")}
          </Link>
          <Link href={`/${locale}/blog`} onClick={() => setIsOpen(false)} className={mobileNavClassName("/blog")}>
            {t("knowledge")}
          </Link>
          <Link href={`/${locale}/free-testas`} onClick={() => setIsOpen(false)} className={mobileNavClassName("/free-testas")}>
            {t("freeTest")}
          </Link>
          <Link href={`/${locale}/contact`} onClick={() => setIsOpen(false)} className={mobileNavClassName("/contact")}>
            {t("contact")}
          </Link>

          {/* Divider */}
          <div className="h-px bg-slate-100 my-4" />

          {/* Language Toggle and CTA row for Mobile */}
          <div className="flex items-center justify-between pt-2">
            <Link
              href={getLocalizedPath(otherLocale)}
              onClick={() => setIsOpen(false)}
              prefetch={false}
              className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors"
              aria-label={locale === 'vn' ? 'Switch to English' : 'Chuyển sang tiếng Việt'}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
              {locale === "vn" ? "Tiếng Việt (VN)" : "English (EN)"}
            </Link>
            
            <Link
              href={`/${locale}/consultation`}
              onClick={() => setIsOpen(false)}
              className="bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-orange-700 transition-colors duration-200 text-center"
            >
              {t("signup")}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}