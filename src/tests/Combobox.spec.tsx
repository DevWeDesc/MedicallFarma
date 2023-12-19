/**
 * @jest-environment jsdom
 */
import { Combobox } from "@/components/Combobox";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Header render", () => {
  it("renders header unchanged", () => {
    const { container } = render(<Combobox />);
    expect(container).toMatchSnapshot();
  });

  it("Header Text contain", () => {
    const { getByText } = render(<Combobox />);

    expect(getByText("Saneantes")).toBeInTheDocument();
    expect(getByText("Tratamentos de ferida")).toBeInTheDocument();
    expect(getByText("Material")).toBeInTheDocument();
  });
});
