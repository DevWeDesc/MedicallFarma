import { Aboult } from "@/components/Aboult";
import { BannerAbout } from "@/components/BannerAbout";
import { CardAbout } from "@/components/Cards/CardAbout";
import { Suppliers } from "@/components/Suppliers";
import React from "react";
import { CardAboutData } from "../../../data/data";

export default function Page() {
  return (
    <div className="pt-8">
      <section>
        {" "}
        <BannerAbout />{" "}
      </section>
      <section>
        <Aboult />
      </section>
      <section className="px-5 flex flex-col gap-5 py-16 xl:grid xl:grid-cols-3 xl:px-40 xl:gap-16 2xl:mx-32 2xl:justify-items-center">
        {CardAboutData.map((item, index) => (
          <CardAbout key={index} title={item.title} content={item.content} />
        ))}
      </section>
      <section>
        <Suppliers
          title={`Saiba mais sobre Nossos Fonecedores`}
          content="As empresas estão empenhadas em fornecer produtos excepcionais aos nossos clientes. Buscamos parceiros que compartilhem nosso compromisso com altos padrões de qualidade, desde a matéria-prima até o produto final."
        />
      </section>
    </div>
  );
}
