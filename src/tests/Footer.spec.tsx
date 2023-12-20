/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Footer } from "@/components/Footer";
import "intersection-observer";

describe("Suppliers render", () => {
  it("renders SolutionsMoment unchanged", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });

  it("renders SwiperSuppliers", () => {
    const { getByText } = render(<Footer />);

    expect(getByText("Mapa do Site")).toBeInTheDocument();
    expect(getByText("Inicio")).toBeInTheDocument();
    expect(getByText("Contatos")).toBeInTheDocument();
    expect(
      getByText(
        "© Copyright 2023 | Desenvolvido por WeDesc | Todos os Direitos Reservados"
      )
    ).toBeInTheDocument();
  });
});
