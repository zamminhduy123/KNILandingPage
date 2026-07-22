import {ReactNode} from 'react';
import './css/style.css';

type Props = {
  children: ReactNode;
};

// Root layout is required by Next.js App Router
export default function RootLayout({children}: Props) {
  return (
    <html lang="vn" className="scroll-smooth">
      <body className="bg-gray-50 font-inter tracking-tight text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}