import type { Metadata } from 'next';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import JsonLd from '@/components/JsonLd/JsonLd';
import { siteBaseUrl, siteDescription, siteName } from '@/config/seo';
import { buildSiteStructuredData } from '@/config/structured-data';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: siteBaseUrl,
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  openGraph: {
    title: siteName,
    description: siteDescription,
    siteName,
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <JsonLd data={buildSiteStructuredData()} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
