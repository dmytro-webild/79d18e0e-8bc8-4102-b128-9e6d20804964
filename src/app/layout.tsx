import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Poppins } from "next/font/google";



export const metadata: Metadata = {
  title: 'BeefyKing | Gourmet Burgers & Fresh Ingredients',
  description: 'Order the best gourmet burgers from BeefyKing. Fresh, flame-grilled, and delivered right to your door.',
  openGraph: {
    "title": "BeefyKing | Gourmet Burgers",
    "description": "The ultimate burger experience.",
    "siteName": "BeefyKing"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "BeefyKing | Gourmet Burgers"
  },
};

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${poppins.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
