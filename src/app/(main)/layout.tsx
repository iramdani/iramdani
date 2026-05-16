import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Webflow CSS hanya untuk homepage — scoped ke (main) layout saja */}
      <link
        href="https://cdn.prod.website-files.com/6350808bc45bd0c902af10e6/css/amplemarket-staging.webflow.shared.6bf8b14c4.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://cdn.prod.website-files.com/6350808bc45bd0c902af10e6/css/amplemarket-staging.webflow.6694f1b8a9955d9d2be998ad.334417fb4.opt.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
