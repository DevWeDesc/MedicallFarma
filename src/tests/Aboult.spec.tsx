/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Aboult } from "@/components/Aboult";
import "intersection-observer";

describe("Aboult render", () => {
  it("renders Aboult unchanged", () => {
    const { container } = render(<Aboult />);
    expect(container).toMatchSnapshot();
  });

  it("renders Aboult text", () => {
    const { getByText, getByRole } = render(<Aboult />);

    expect(getByText("Sobre a Medicall Farma")).toBeInTheDocument();
    expect(
      getByText(
        "Atuamos há mais de 10 anos no mercado de vendas e distribuição de materiais médicos e medicamentos hospitalares em todo o estado de São Paulo."
      )
    ).toBeInTheDocument();
    expect(
      getByText(
        "Oferecemos a melhor experiência de atendimento aos nossos clientes, fornecedores e acionistas, dede o primeiro contato. Trabalhamos com um mix de Produtos."
      )
    ).toBeInTheDocument();
    expect(
      getByText(
        "Diversificados das melhores marcas nacionais e internacionais garantimos total adilidade e pontualidade nas entregas através de um rigoroso processo de qualidade operacional."
      )
    ).toBeInTheDocument();
  });

  it("renders Aboult text", () => {
    const { getByRole } = render(<Aboult />);

    expect(getByRole("img")).toBeInTheDocument();
  });
});
