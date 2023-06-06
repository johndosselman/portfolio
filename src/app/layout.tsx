import "./globals.css";
import { Bitter, Libre_Franklin, Work_Sans } from "next/font/google";

const bitter = Bitter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bitter",
  display: "block",
});

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-libreFranklin",
  display: "block",
});

const work = Work_Sans({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-work",
  display: "block",
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
    <html
      lang="en"
      className={`${bitter.variable} ${libreFranklin.variable} ${work.variable} scroll-smooth`}
    >
      <body>{children}</body>
    </html>
  );
}
