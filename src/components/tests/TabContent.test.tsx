import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TabContent from "components/TabContent";
import UserInfo from "components/UserInfo";
import { fetchMockUsers, generateFullname } from "utils/global";

describe("TabContent component", () => {
  const defaultProps = {
    activeTab: "c",
    isLoading: false,
    searchValue: "",
  };

  it("renders a skeleton list when isLoading prop is true", async () => {
    const users = await fetchMockUsers();
    render(<TabContent {...defaultProps} users={users} isLoading={true} />);

    expect(screen.getByTestId("tab-content-skeleton")).toBeInTheDocument();
  });

  it("renders a message when users prop is empty", async () => {
    render(<TabContent {...defaultProps} users={[]} isLoading={false} />);

    expect(screen.getByText("List is Empty")).toBeInTheDocument();
  });

  it("renders a message with searchValue when users prop is empty and searchValue is provided", () => {
    const searchValue = "jack";
    render(
      <TabContent
        {...defaultProps}
        users={[]}
        isLoading={false}
        searchValue={searchValue}
      />
    );

    expect(
      screen.getByText(`No Results for "${searchValue}"`)
    ).toBeInTheDocument();
  });

  it("renders a list of users when users prop is provided", async () => {
    const users = await fetchMockUsers();
    render(<TabContent {...defaultProps} users={users} isLoading={false} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(10);
    expect(screen.getByText(generateFullname(users[0]))).toBeInTheDocument();
  });

  it("displays the user info when a user is selected", async () => {
    const users = await fetchMockUsers();
    const { container } = render(
      <TabContent {...defaultProps} users={users} isLoading={false} />
    );

    const userItem = screen.getAllByRole("listitem")[0];
    userEvent.click(userItem);

    expect(
      container.getElementsByClassName("tab-content__user-info")[0]
    ).toBeInTheDocument();
  });

  it("closes the user info when the close button is clicked", async () => {
    const users = await fetchMockUsers();
    const { container } = render(
      <TabContent {...defaultProps} users={users} isLoading={false} />
    );
    const userItem = screen.getAllByRole("listitem")[0];
    userEvent.click(userItem);

    const closeButton = screen.getByTestId("close-button");
    userEvent.click(closeButton);

    expect(
      container.getElementsByClassName("tab-content__user-info")[0]
    ).toBeUndefined()
  });
});
