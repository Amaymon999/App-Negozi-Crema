import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Crema Centro Pass',
  description: 'Piattaforma digitale per il commercio del centro di Crema'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
