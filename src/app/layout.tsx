import { logo } from "@/components/Common/CdnAssets";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WeeroDigital",
  description: "Transforming Ideas into Reality",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href={logo} />
      </head>
      <body className={` ${poppins.className} bg-primary`}>
        {children}
      </body>
    </html>
  );
}
