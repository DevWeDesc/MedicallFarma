/**
 * @jest-environment jsdom
 */
import { SearchBar } from "@/components/SearchBar";
import { render } from "@testing-library/react";

describe("SearchBar", () => {
  it("renders SearchBar unchanged", () => {
    const { container } = render(<SearchBar handleSearchOpen={() => false} />);

    expect(container).toMatchSnapshot();
  });
});
