import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mandir Web",
  description: "Multi-language spiritual web starter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
