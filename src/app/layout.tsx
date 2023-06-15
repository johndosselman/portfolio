import "./globals.css";
import { Work_Sans } from "next/font/google";

const work = Work_Sans({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-work",
  display: "swap",
});

export const metadata = {
  title: "John Dosselman",
  description: "Software developer portfolio",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={` ${work.variable} scroll-smooth`}>
      <body className="">{children}</body>
    </html>
  );
}
