import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Sandaluxe | Cửa hàng dép thời trang",
  description:
    "Khám phá bộ sưu tập dép thời trang cao cấp của Sandaluxe. Thiết kế tinh tế, êm ái, phù hợp mọi phong cách.",
  keywords: [
    "dép",
    "giày dép",
    "thời trang",
    "sandal",
    "sandal nữ",
    "sandal nam",
    "shop online"
  ],
  openGraph: {
    title: "Sandaluxe | Cửa hàng dép thời trang",
    description:
      "Bộ sưu tập dép chất lượng cao, êm ái, bền bỉ với nhiều phong cách đa dạng.",
    url: "https://agentic-1a703978.vercel.app",
    siteName: "Sandaluxe",
    locale: "vi_VN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandaluxe | Cửa hàng dép thời trang",
    description:
      "Bộ sưu tập dép chất lượng cao, êm ái, bền bỉ với nhiều phong cách đa dạng."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${montserrat.variable} ${inter.variable} font-body bg-slate-900 text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
