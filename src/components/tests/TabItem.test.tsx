import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TabItem from "components/TabItem";

describe("TabItem component", () => {
  const defaultProps = {
    label: "a",
    count: 5,
    onClick: jest.fn(),
  };

  it("renders label and count correctly", () => {
    render(<TabItem {...defaultProps} />);

    const label = screen.getByTestId("tabItem-label");
    const count = screen.getByTestId("tabItem-count");

    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent(defaultProps.label);
    expect(count).toBeInTheDocument();
    expect(count).toHaveTextContent(`${defaultProps.count}`);
  });

  it("applies active classnames correctly", () => {
    render(<TabItem {...defaultProps} isActive />);
    const tabItem = screen.getByRole("listitem");
    expect(tabItem).toHaveClass("tabItem--active");
  });

  it("applies disable classnames correctly", () => {
    render(<TabItem {...defaultProps} count={0} />);
    const tabItem = screen.getByRole("listitem");
    expect(tabItem).toHaveClass("tabItem--disable");
  });

  it("calls onClick callback when clicked", () => {
    render(<TabItem {...defaultProps} />);
    const tabItem = screen.getByRole("listitem");

    userEvent.click(tabItem);
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
    expect(defaultProps.onClick).toHaveBeenCalledWith(defaultProps.label);
  });
});
