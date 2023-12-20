/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Suppliers } from "@/components/Suppliers";
import SwiperSuppliers from "@/components/SwiperSuppliers/SwiperSuppliers";
import "intersection-observer";

describe("Suppliers render", () => {
  it("renders SolutionsMoment unchanged", () => {
    const { container, getByText } = render(
      <Suppliers title="Nossos Fornecedores" />
    );
    expect(container).toMatchSnapshot();
    expect(getByText("Nossos Fornecedores")).toBeInTheDocument();
  });

  it("renders SwiperSuppliers", () => {
    const { container } = render(<SwiperSuppliers />);

    expect(container).toMatchSnapshot();
  });
});
