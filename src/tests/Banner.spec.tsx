/**
 * @jest-environment jsdom
 */
import { Banner } from "@/components/Banner";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Banner render", () => {
  it("renders Banner unchanged", () => {
    const { container } = render(<Banner />);
    expect(container).toMatchSnapshot();
  });

  it("Banner Image Products contain", () => {
    const { queryAllByTestId } = render(<Banner />);

    expect(queryAllByTestId("banner-image-home")).toMatchSnapshot();
  });

  it("Banner Text contain", () => {
    const { getByText } = render(<Banner />);

    expect(
      getByText(
        "Encontre os melhores Produtos Hospitalares com os Melhores Preços aqui na"
      )
    ).toBeInTheDocument();

    expect(getByText("Medicall Farma!")).toBeInTheDocument();
  });
});
