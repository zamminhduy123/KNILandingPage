import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale } : any) => {
  // Validate the locale
  if (!routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
  }

  // Load the messages for the given locale
  const messages = (await import(`../messages/${locale}.json`)).default;

  return {
    locale,
    messages,
  };
});