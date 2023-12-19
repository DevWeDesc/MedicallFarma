"use client";
import { Banner } from "@/components/Banner";
import { Combobox } from "@/components/Combobox";
import { HighlightsProducts } from "@/components/HighlightsProducts";
import { ProductsRecommended } from "@/components/ProductsRecommended";
import { Separator } from "@/components/Separator";
import { SolutionsMoment } from "@/components/SolutionsMoment";
import { Suppliers } from "@/components/Suppliers";
import Link from "next/link";
import { Motion } from "@/animations/Motion";

export default function Home() {
  return (
    <main>
      <section>
        <Combobox />
      </section>
      <section id="Init">
        <Banner />
      </section>
      <section id="HighlightsProduct">
        <HighlightsProducts />
      </section>
      <section id="Soluctions">
        <SolutionsMoment />
      </section>
      <Separator />
      <section id="Suppliers">
        <Suppliers title="Nossos Fornecedores" />
      </section>
      <Separator />
      <section id="productRecomended">
        <ProductsRecommended />
      </section>
      <section className="flex flex-col justify-center items-center py-9 gap-8 bg-grayLight text-white">
        <p>Conhça mais sobre a MEDICALL FARMA</p>
        <Link className="w-full text-center" href="about">
          Ir para About
        </Link>
      </section>
      <Motion />
    </main>
  );
}
