import type { Metadata } from 'next';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'НижнийГид',
  description: 'Персональные экскурсии по Нижнему Новгороду с частным гидом.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
