import {ReactNode} from 'react';
import './css/style.css';

type Props = {
  children: ReactNode;
};

// Root layout is required by Next.js App Router
export default function RootLayout({children}: Props) {
  return children;
}