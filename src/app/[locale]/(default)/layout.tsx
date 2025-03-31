import Header from "@/src/components/ui/header";
import Footer from "@/src/components/ui/footer";

import {NextIntlClientProvider, hasLocale, useMessages} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/src/i18n/routing';
import { Inter } from "next/font/google";
import ClientLayout from './index'
import AOSInitializer from '@/src/components/AOSInitializer'
import Head from 'next/head';
import {setRequestLocale} from 'next-intl/server';
import '../../css/style.css' 

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
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
      <Head>
        <title>KNI - TestAS</title>
        <meta name="description" content="A brief description of your page" />
        <meta name="keywords" content="Next.js, SEO, optimization, TestAS, Test for Academic Studies, KNI, Khanh Nhat Institute" />
        <link
          rel="icon"
          href="/icon.png"
          type="image/png"
          sizes="32"
        />
      </Head>
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <NextIntlClientProvider locale={locale}>
          <ClientLayout params={params}>
            <AOSInitializer />{children}
          </ClientLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}