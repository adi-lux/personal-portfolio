import type { Metadata } from 'next';
import { Fira_Sans } from 'next/font/google';
import './globals.css';

const firaSans = Fira_Sans({
  subsets: ['latin'],
  display: 'auto',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Adithya Anandsaikrishnan',
  description: 'The portfolio of Adithya Anandsaikrishnan, Software Engineer',
};

const currentTheme = 'retro';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme={currentTheme} lang="en">
      <body className={`${firaSans.className} antialiased`}>{children}</body>
    </html>
  );
}
