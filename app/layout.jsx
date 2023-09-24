import { Roboto } from "next/font/google";

import "../src/styles/main.sass";

// components
import Header from "@/src/components/Header/Header";
import Aside from "@/src/components/Aside/Aside";
import Footer from "@/src/components/Footer/Footer";

const roboto = Roboto({ subsets: ["cyrillic"], weight: ["400", "500"] });

export const metadata = {
  title: "Info portal",
  description: "Info portal Next.js App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/news.svg" />
      </head>
      <body className={roboto.className}>
        <div id="app">
          <Header />
          <div className="content container">
            <Aside />
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
