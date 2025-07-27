import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Novel Site',
  description: 'A simple web novel platform prototype',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-900">
        <header className="p-4 bg-blue-600 text-white text-xl">Novel Site</header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
