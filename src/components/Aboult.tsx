import React from "react";
import ImagesGrid from "../../public/ImagesGrid.png";
import Image from "next/image";

export const Aboult = () => {
  return (
    <div className="flex flex-col-reverse py-12 px-5 gap-5">
      <Image alt="" src={ImagesGrid} />
      <div className="flex flex-col gap-3">
        <div>
          <h2 className="text-xl font-bold">Sobre a Medicall Farma</h2>
          <div className="text-xs font-light">
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
        <div>
          <h2 className="text-xl font-bold">Nossa Missão</h2>
          <p className="text-xs font-light">
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
