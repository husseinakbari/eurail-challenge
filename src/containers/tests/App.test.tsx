import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "containers/App";

describe("App component", () => {
  it("displays contacts correctly", async () => {
    const { getByText } = render(<App />);

    // Using act to make delay for prevent act warning when component states update
    await act(async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 50);
      });
    });
    expect(getByText("Contacts List")).toBeInTheDocument();
  });
});
