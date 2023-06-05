import "./globals.css";
import { Cousine, Nunito_Sans, Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-roboto",
  display: "block",
});

const robotoLight = Roboto({
  subsets: ["latin"],
  weight: ["100"],
  variable: "--font-roboto-light",
  display: "block",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-nunito",
  display: "block",
});

const cousine = Cousine({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cousine",
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
      className={`${robotoLight.variable} ${roboto.variable} ${nunito.variable} ${cousine.variable} scroll-smooth`}
    >
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
