import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const robotoCondesed = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Medicall Farma",
  description:
    "A Medicall Farma tem como missão contribuir com a melhoria da vida e saúde das pessoas, por meio de fornecimento de materiais médicos e medicamentos hospitalares de alta qualidade às instituições de saúde privadas e públicas do estado de São Paulo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={robotoCondesed.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
