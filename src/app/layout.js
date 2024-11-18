// src/app/layout.js
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className='mt-13'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
