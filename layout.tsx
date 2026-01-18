import type { Metadata } from "next";
import Link from "next/link";
import { Geist } from "next/font/google";
import ThemeToggle from "../components/ThemeToggle";

import "./layout.css";

const geist = Geist({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "My Website",
  description: "This is my Next.js site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.className}>
      <body>
        <div id="container">
          <div id="my-title">
            <h1 className="">Welcome</h1>
          </div>

          <div id="main-menu">
            <nav>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/service">Service</Link></li>
              </ul>
            </nav>
          </div>

          <div id="login" className="flex items-center gap-4">
            <ThemeToggle />
            <Link className="btn" href="/login">Log in</Link>
          </div>
        </div>

        {/* Pages content */}
        {children}
      </body>
    </html>
  );
}
