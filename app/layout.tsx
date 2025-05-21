import Footer from '../components/Footer';
import Header from '../components/Header';
import './globals.css'

export const metadata = {
  title: "x0platform",
  description: "Online, On Budget, On Point"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics (replace G-XXXX with your actual ID) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXX');
            `
          }}
        />
        <link rel="icon" href="/logo.svg" />
      </head>
      <body>
        {/* <Header /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}