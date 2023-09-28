import { TopLine } from "@/components/TopLine/TopLine";
import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";

const inter = Noto_Sans({
  weight: ["400", "500", "700", "800", "900"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Nagai Industries",
  description:
    "Nagai Industries is an independent game development studio headquartered in Tokyo, Japan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={inter.className}>
        <TopLine />
        {children}
      </body>
    </html>
  );
}
