import "./globals.css";
import { Bitter } from "next/font/google";

const bitter = Bitter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bitter",
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
    <html lang="en" className={`${bitter.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
