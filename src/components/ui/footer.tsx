import Link from "next/link";
import Logo from "./logo";
import { useLocale, useTranslations } from "next-intl";
import { FaTiktok, FaFacebookF, FaInstagram } from "react-icons/fa6";

export default function Footer({ border = false }: { border?: boolean }) {
  const locale = useLocale();
  const t = useTranslations("HomePage");

  return (
    <footer>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Top area */}
        <div
          className={`py-8 sm:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]" : ""}`}
        >
          {/* Logo + Copyright + Social */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left: Logo + Copyright */}
            <div className="space-y-2">
              <div>
                <Logo />
              </div>
              <div className="text-sm text-gray-600 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span>&copy; KNI.vn - All rights reserved.</span>
                <span className="text-gray-300" aria-hidden="true">|</span>
                <Link
                  href={`/${locale}/privacy-policy`}
                  className="hover:text-orange-500 transition-colors"
                >
                  {t("privacyPolicy")}
                </Link>
              </div>
            </div>

            {/* Right: Social Media */}
            <div className="flex items-center gap-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.tiktok.com/@khanhnhat.institute"
                className="text-gray-500 hover:text-orange-500 transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok size={20} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/testascandidates"
                className="text-gray-500 hover:text-orange-500 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/khanhnhatinstitute/"
                className="text-gray-500 hover:text-orange-500 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Big text */}
      <div className="relative -mt-16 h-60 w-full pointer-events-none" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-linear-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['KNI'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['KNI'] after:[text-shadow:0_1px_0_white]"></div>
        {/* Glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
          aria-hidden="true"
        >
          <div className="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px]"></div>
        </div>
      </div>
    </footer>
  );
}
