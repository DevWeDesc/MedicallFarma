/**
 * @jest-environment jsdom
 */
import { getByText, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BannerAbout } from "@/components/BannerAbout";
import "intersection-observer";

describe("BannerAbout render", () => {
  it("renders BannerAbout unchanged", () => {
    const { container } = render(<BannerAbout />);
    expect(container).toMatchSnapshot();
  });

  it("renders BannerAbout", () => {
    const { getByText } = render(<BannerAbout />);

    expect(
      getByText(
        "Missão de Saúde: Fornecendo Excelência em Medicamentos e Materiais Médicos"
      )
    ).toBeInTheDocument();
    expect(
      getByText(
        "Bem-vindo à MEDICALL FARMA, sua parceira dedicada na entrega de soluções de saúde excepcionais. Com uma visão centrada no bem-estar, estamos comprometidos em fornecer medicamentos e materiais médicos de qualidade superior, promovendo a excelência no cuidado médico. Descubra mais sobre nossa história, valores e o compromisso que temos em impulsionar a saúde e o progresso na comunidade médica."
      )
    ).toBeInTheDocument();
  });
});
