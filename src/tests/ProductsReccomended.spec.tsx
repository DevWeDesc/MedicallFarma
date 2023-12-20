/**
 * @jest-environment jsdom
 */
import { getByText, render } from "@testing-library/react";
import { ProductsRecommended } from "@/components/ProductsRecommended";
import "@testing-library/jest-dom";
import "intersection-observer";

describe("ProductsReccomended", () => {
  it("renders ProductsReccomended unchanged", () => {
    const { container } = render(<ProductsRecommended />);

    expect(container).toMatchSnapshot();
  });

  it("render text ProductsReccomended", () => {
    const { getByText } = render(<ProductsRecommended />);

    expect(getByText("Produtos Recomendados para Você!")).toBeInTheDocument();
    expect(getByText("Desinfetante alto nível - Glutomax")).toBeInTheDocument();
    expect(
      getByText("Equipo macro completo Injetor lateral - LA VITA")
    ).toBeInTheDocument();
  });
});
