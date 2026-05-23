import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WalkWithJesus — Scripture-grounded guidance",
  description:
    "An AI-powered Christian assistant that retrieves emotionally relevant scripture and offers compassionate, grounded guidance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Cormorant Garamond — elegant serif for the cross/brand mark */}
        {/* Lato — warm, humanist sans for body text */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
