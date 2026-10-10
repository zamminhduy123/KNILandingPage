import Header from "@/src/components/ui/header";
import Footer from "@/src/components/ui/footer";

import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/src/i18n/routing';
import { Inter } from "next/font/google";
import ClientLayout from './index'
import AOSInitializer from '@/src/components/AOSInitializer'
import '../../css/style.css'
import Script from 'next/script';
import { Metadata, Viewport } from 'next';
import {SpeedInsights} from '@vercel/speed-insights/next';
import {Analytics} from '@vercel/analytics/next';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

// themeColor is a viewport field in Next 15+; putting it in `metadata` silently drops the tag.
export const viewport: Viewport = {
  themeColor: '#ff914d',
};

// Site-wide defaults that all pages inherit
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    metadataBase: new URL('https://kni.vn'),
    title: {
      template: "%s | KNI Education",
      default: "KNI Education",
    },
    description: 'KNI - Trung tâm luyện thi TestAS uy tín tại TP.HCM. Tỷ lệ đậu 95%, tư vấn du học Đức & VGU miễn phí.',
    manifest: '/manifest.json',
    icons: {
      icon: [
        { url: '/icon.png', sizes: '32x32', type: 'image/png' },
        { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: '/icon-192.png',
    },
    openGraph: {
      siteName: "KNI Education",
      type: "website",
      locale: locale === "en" ? "en_US" : "vi_VN",
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function DefaultLayout({
  children,
  params
}: Props) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale === 'vn' ? 'vi' : 'en'} className="scroll-smooth">
      {/* Pre-check intro animation to prevent page flicker */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            try {
              if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                document.documentElement.classList.add('kni-intro-pending');
              }
            } catch(e) {}
          `,
        }}
      />
      {/* Google Tag Manager */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T8S7RS8V');`,
        }}
      />
      {/* End Google Tag Manager */}

      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />

      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T8S7RS8V"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <NextIntlClientProvider locale={locale}>
          <ClientLayout params={params}>
            <AOSInitializer />{children}
          </ClientLayout>
        </NextIntlClientProvider>
        {/* EducationalOrganization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              '@id': 'https://kni.vn/#organization',
              name: 'KNI Education',
              url: 'https://kni.vn',
              logo: 'https://kni.vn/images/logo.avif',
              description:
                'Trung tâm luyện thi TestAS uy tín tại TP.HCM với tỷ lệ đậu 95%. Tư vấn du học Đức và VGU miễn phí.',
              founder: {
                '@type': 'Person',
                '@id': 'https://kni.vn/#founder',
                name: 'Khánh Nhật',
                jobTitle: 'Founder & TestAS Lead Instructor',
                email: 'nhat@kni.vn',
                alumniOf: {
                  '@type': 'CollegeOrUniversity',
                  name: 'Vietnamese-German University (VGU)'
                }
              },
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: '+84-91-839-1099',
                  contactType: 'customer service',
                  areaServed: 'VN',
                  availableLanguage: ['English', 'Vietnamese'],
                },
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Thành phố Hồ Chí Minh',
                addressCountry: 'VN',
              },
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Thành phố Hồ Chí Minh',
                },
                {
                  '@type': 'Country',
                  name: 'Việt Nam',
                },
              ],
              sameAs: [
                'https://www.facebook.com/testascandidates',
                'https://www.instagram.com/khanhnhatinstitute/',
                'https://www.tiktok.com/@khanhnhat.institute',
              ]
            })
          }}
        />
        {/* WebSite Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': 'https://kni.vn/#website',
              name: 'KNI Education',
              url: 'https://kni.vn/',
              publisher: {
                '@id': 'https://kni.vn/#organization',
              },
              inLanguage: ['vi-VN', 'en-US'],
            })
          }}
        />
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-22N9GX8CS1"></Script>
        <Script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-22N9GX8CS1');
          `}
        </Script>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
