import "./globals.css";
import { Cousine, Nunito_Sans, Red_Hat_Display, Roboto, Tenor_Sans } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-roboto",
  display: "swap",
});

const robotoLight = Roboto({
  subsets: ["latin"],
  weight: ["100"],
  variable: "--font-roboto-light",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-nunito",
});

const cousine = Cousine({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cousine",
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
      className={`${robotoLight.variable} ${roboto.variable} ${nunito.variable} ${cousine.variable}`}
    >
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
