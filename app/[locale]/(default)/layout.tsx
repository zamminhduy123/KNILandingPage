import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

import {NextIntlClientProvider, hasLocale, useMessages} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { Inter } from "next/font/google";
import ClientLayout from './index'
import AOSInitializer from '@/components/AOSInitializer'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

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