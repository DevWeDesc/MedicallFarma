/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CardAbout } from "@/components/Cards/CardAbout";
import "intersection-observer";

describe("BannerAbout render", () => {
  it("renders BannerAbout unchanged", () => {
    const { container } = render(
      <CardAbout content="Descrição do card" title="Titulo do card" />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders BannerAbout text", () => {
    const { getByText } = render(
      <CardAbout content="Descrição do card" title="Titulo do card" />
    );

    expect(getByText("Descrição do card")).toBeInTheDocument();
    expect(getByText("Titulo do card")).toBeInTheDocument();
  });
});
