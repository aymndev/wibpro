import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./layout.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="container">
          <div id="my-title">
            <h1>welcome</h1>
          </div>

          <div id="main-menu">
            <nav>
              <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/service">Service</a></li>
              </ul>
            </nav>
          </div>

          <div id="login">
            <a className="btn" href="/login">Log in</a>
          </div>
        </div>



        {/* Pages content */}
        {children}
      </body>
    </html>
  );
}



