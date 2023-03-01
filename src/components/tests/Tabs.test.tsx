import { fireEvent, render, screen } from "@testing-library/react";
import Tabs from "components/Tabs";
import { fetchMockContact } from "utils/global";

describe("Tabs component", () => {
  it("renders the search input", async () => {
    const contacts = await fetchMockContact();
    render(<Tabs contacts={contacts} isLoading={false} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders the mock tab item when isLoading is true", async () => {
    const contacts = await fetchMockContact();
    render(<Tabs contacts={contacts} isLoading={true} />);
    expect(screen.getByTestId("mock-tab-item")).toBeInTheDocument();
  });

  it("renders the tab items when contacts is not null and isLoading is false", async () => {
    const contacts = await fetchMockContact();

    const { getByText } = render(
      <Tabs contacts={contacts} isLoading={false} />
    );
    expect(getByText("c")).toBeInTheDocument();
    expect(getByText("h")).toBeInTheDocument();
  });
});
