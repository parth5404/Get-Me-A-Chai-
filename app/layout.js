import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";


import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get Me A chai",
  description: "Website for fundraising",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
      
          <Navbar />
          <div className="min-h-[90vh] absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">
            {children}
          </div>
         
    
      </body>
    </html>
    </ClerkProvider>
  );
}
