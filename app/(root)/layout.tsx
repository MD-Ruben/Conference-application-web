import { ReactNode } from "react";
import { IBM_Plex_Serif, Nunito } from 'next/font/google';
import { cn } from "@/lib/utils";
import "../globals.css";

import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from "next";

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-serif',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-nunito',
});

export const metadata: Metadata = {
  title: "Ministère du Commerce et de l'Industrie",
  description: "Application d'appel vidéo",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en">
      <body className={cn(
        "bg-neutral-900 min-h-screen",
        ibmPlexSerif.variable,
        nunito.variable
      )}>
        <main>
          <StreamVideoProvider>{children}</StreamVideoProvider>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
