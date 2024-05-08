import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Parallel Routes Loading UI Test",
};

export default function RootLayout({
  header,
  sidebar,
  comments,
  children,
}: Readonly<{
  header: React.ReactNode;
  sidebar: React.ReactNode;
  comments: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full flex flex-col">
          {header}
          <div className="flex w-full">
            <div className="flex flex-col w-4/5">
              {children}
              {comments}
            </div>
            <div className="flex flex-col w-1/5">
              {sidebar}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
