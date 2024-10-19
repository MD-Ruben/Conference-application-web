import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ministère du Commerce et de l'Industrie",
  description: "Application d'appel vidéo",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main className="h-screen bg-body bg-cover bg-center">{children}</main>
  );
};

export default RootLayout;
