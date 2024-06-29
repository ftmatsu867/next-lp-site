import { Merriweather } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({ subsets: ["latin"],weight:["300","400","700","900"] });

export const metadata = {
  title: "game-site",
  description: "this site provide new game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={merriweather.className}>{children}</body>
    </html>
  );
}
