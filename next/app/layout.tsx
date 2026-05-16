import type { Metadata } from 'next';
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
      <body>{children}</body>
    </html>
  );
}
