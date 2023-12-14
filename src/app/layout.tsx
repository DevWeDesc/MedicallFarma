import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BsWhatsapp } from "react-icons/bs";

import Link from "next/link";

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
        <Link
          target="_blank"
          className="fixed z-30"
          href="https://api.whatsapp.com/send?phone=5511997271350&text=Olá!%20estou%20interessado%20em%20pedir%20um%20orçamento!"
          title="Link para Entrar em contato com o WhatsApp de Orçamentos"
        >
          <BsWhatsapp className="fixed bottom-10 right-10 text-4xl  cursor-pointer text-green-500 hover:text-green-600 transition-all" />
        </Link>
      </body>
    </html>
  );
}
