/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SolutionsMoment } from "@/components/SolutionsMoment";
import "intersection-observer";

describe("SolutionsMoment render", () => {
  it("renders SolutionsMoment unchanged", () => {
    const { container } = render(<SolutionsMoment />);
    expect(container).toMatchSnapshot();
  });

  it("renders SolutionsMoment link unchanged", () => {
    const { container } = render(<SolutionsMoment />);
    expect(container).toMatchSnapshot();
  });

  it("Solutions Moment Text contain", () => {
    const { getByText } = render(<SolutionsMoment />);

    expect(getByText("Soluções do Momento!")).toBeInTheDocument();
    expect(getByText("Saneantes")).toBeInTheDocument();
    expect(getByText("Tratamentos de ferida")).toBeInTheDocument();
    expect(getByText("Material")).toBeInTheDocument();
  });
});
