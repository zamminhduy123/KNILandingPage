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
import { Metadata } from 'next';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

// Site-wide defaults that all pages inherit
export const metadata: Metadata = {
  metadataBase: new URL('https://kni.vn'),
  title: {
    template: "%s | KNI Education",
    default: "KNI Education",
  },
  description: 'KNI - Trung tâm luyện thi TestAS uy tín tại TP.HCM. Tỷ lệ đậu 95%, tư vấn du học Đức & VGU miễn phí.',
};

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
    <html lang={locale} className="scroll-smooth">
      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />

      {/* Favicon */}
      <link rel="apple-touch-icon" href="/icon-192.png" />
      <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
      <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
      <link rel="icon" href="/icon-512.png" type="image/png" sizes="512x512" />

      {/* Web App Manifest */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#ff914d" />

      {/* Open Graph defaults — pages override with page-specific values */}
      <meta property="og:site_name" content="KNI Education" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={locale === "en" ? "en_US" : "vi_VN"} />
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <NextIntlClientProvider locale={locale}>
          <ClientLayout params={params}>
            <AOSInitializer />{children}
          </ClientLayout>
        </NextIntlClientProvider>
        {/* EducationalOrganization & AggregateRating Structured Data */}
        <Script
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EducationalOrganization',
            name: 'KNI Education',
            url: 'https://kni.vn',
            logo: 'https://kni.vn/images/logo.avif',
            description:
              'Trung tâm luyện thi TestAS uy tín tại TP.HCM với tỷ lệ đậu 95%. Tư vấn du học Đức và VGU miễn phí.',
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
            sameAs: [
              'https://www.facebook.com/testascandidates',
              'https://www.instagram.com/khanhnhatinstitute/',
              'https://www.tiktok.com/@khanhnhat.institute',
            ],
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '9.0',
              reviewCount: '44',
              bestRating: '10',
              worstRating: '1',
            },
          })}
        </Script>
        {/* WebSite Structured Data */}
        <Script
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'KNI Education',
            url: 'https://kni.vn/',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://kni.vn/{search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          })}
        </Script>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-22N9GX8CS1"></Script>
        <Script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-22N9GX8CS1');
          `}
        </Script>
      </body>
    </html>
  );
}
