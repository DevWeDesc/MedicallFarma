import React from "react";
import ImagesGrid from "../../public/ImagesGrid.png";
import Image from "next/image";

export const Aboult = () => {
  return (
    <div className="flex flex-col-reverse py-12 px-5 gap-5 lg:pt-0 lg:px-0 lg:grid lg:grid-cols-2 lg:gap-20 lg:py-0">
      <Image alt="" className="lg:min-h-[30rem] lg:w-full" src={ImagesGrid} />
      <div className="flex flex-col gap-3 lg:py-8 lg:pr-16 lg:gap-10">
        <div className="flex flex-col lg:gap-5">
          <h2 className="text-xl font-bold lg:text-5xl">
            Sobre a Medicall Farma
          </h2>
          <div className="text-xs font-light lg:text-lg">
            <p>
              Atuamos há mais de 10 anos no mercado de vendas e distribuição de
              materiais médicos e medicamentos hospitalares em todo o estado de
              São Paulo.
            </p>
            <p>
              Oferecemos a melhor experiência de atendimento aos nossos
              clientes, fornecedores e acionistas, dede o primeiro contato.
              Trabalhamos com um mix de Produtos.
            </p>
            <p>
              Diversificados das melhores marcas nacionais e internacionais
              garantimos total adilidade e pontualidade nas entregas através de
              um rigoroso processo de qualidade operacional.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:gap-5">
          <h2 className="text-xl font-bold lg:text-5xl">Nossa Missão</h2>
          <p className="text-xs font-light lg:text-lg">
            A Medicall Farma tem como missão contribuir com a melhoria da vida e
            saúde das pessoas, por meio de fornecimento de materiais médicos e
            medicamentos hospitalares de alta qualidade às instituições de saúde
            privadas e públicas do estado de São Paulo.
          </p>
        </div>
      </div>
    </div>
  );
};
