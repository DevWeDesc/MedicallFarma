/**
 * @jest-environment jsdom
 */
import { Header } from "../components/Header";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Header render", () => {
  it("renders header unchanged", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });

  it("Header Rendered image", () => {
    const { getByRole } = render(<Header />);

    expect(getByRole("img")).toBeInTheDocument();
  });
});
