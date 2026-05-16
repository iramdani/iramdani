import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "iRamdani Portfolio | Graphic & Web Design",
  description: "Boost your brand with professional Graphic Design and Web Design services by iRamdani.",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-wf-domain="www.iramdani.id" data-wf-page="6694f1b8a9955d9d2be998ad" data-wf-site="6350808bc45bd0c902af10e6" className="w-mod-js w-mod-ix">
      <head>
        <link href="https://cdn.prod.website-files.com/6350808bc45bd0c902af10e6/css/amplemarket-staging.webflow.shared.6bf8b14c4.min.css" rel="stylesheet" type="text/css" />
        <link href="https://cdn.prod.website-files.com/6350808bc45bd0c902af10e6/css/amplemarket-staging.webflow.6694f1b8a9955d9d2be998ad.334417fb4.opt.min.css" rel="stylesheet" type="text/css" />
        <link rel="preload" href="https://cdn.prod.website-files.com/6350808bc45bd0c902af10e6/6855759684592aaffdf5bb32_LabilGroteskVariable-Upright.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="am-body">
        <Header />
        <main>{children}</main>
        <Footer />
        <Script 
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js" 
          strategy="beforeInteractive" 
        />
      </body>
    </html>
  );
}
