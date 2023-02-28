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

//   it("renders the tab content based on the active tab and search value", async () => {
//     const contacts = await fetchMockContact();
//     const { getByTestId, getByText, getByPlaceholderText } = render(<Tabs contacts={contacts} isLoading={false} />);

//     fireEvent.click(getByTestId("tabItem-label")); // click on the "b" tab
//     expect(getByTestId("tab-content")).toHaveTextContent("user3@example.com");
//     fireEvent.change(getByPlaceholderText("Search"), { target: { value: "user1" } }); // search for "user1"
//     expect(getByTestId("tab-content")).toHaveTextContent("user1@example.com");
//   });
});
