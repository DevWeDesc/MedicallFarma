/**
 * @jest-environment jsdom
 */
import { Nav } from "@/components/Nav";
import { render } from "@testing-library/react";

describe("NavBar", () => {
  it("renders NavBar unchanged", () => {
    const menuopen = false;
    const { container, getAllByText } = render(
      <Nav menuOpen={menuopen} handleMenuOpen={() => menuopen} />
    );
    expect(container).toMatchSnapshot();
    expect(getAllByText("Inicio")).toMatchSnapshot();
  });
});
