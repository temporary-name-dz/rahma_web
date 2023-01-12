import "./globals.css";
import Header from "../component/Header/Header";
import RootStyleRegistry from "./RootStyleRegistry";
import Footer from "../component/Common/Footer";
import Providers from "./providers";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Rahma</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <RootStyleRegistry>
          <Providers>
            <div>
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </Providers>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
