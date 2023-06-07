import "./globals.css";
import { Bitter, Libre_Franklin, Work_Sans } from "next/font/google";

const work = Work_Sans({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-work",
  display: "swap",
});

export const metadata = {
  title: "John Dosselman",
  description: "Software developer portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={` ${work.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
