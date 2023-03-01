import { render } from "@testing-library/react";
import LazyImage from "components/LazyImage";

describe("LazyImage component", () => {
  it("renders with default props", () => {
    const { getByTestId, queryByRole } = render(<LazyImage />);
    expect(queryByRole("img")).not.toBeInTheDocument();
    expect(getByTestId("image-placeholder")).toBeInTheDocument();
  });
});
