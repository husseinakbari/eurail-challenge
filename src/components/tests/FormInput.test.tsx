import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormInput from "components/FormInput";

describe("FormInput component", () => {
  const onClear = jest.fn();
  const onChange = jest.fn();

  it("renders an input field", () => {
    render(<FormInput onClear={onClear} onChange={onChange} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders a clear icon when the input field has a value", () => {
    render(<FormInput value="example" onClear={onClear} onChange={onChange} />);
    expect(screen.queryByTestId("close-button")).toBeInTheDocument();
  });

  it("renders a clear icon when the input field doesn't has a value", () => {
    render(<FormInput onClear={onClear} onChange={onChange} />);
    expect(screen.queryByTestId("close-button")).toBeNull();
  });

  it("calls the onClear function when the clear icon is clicked", () => {
    render(<FormInput value="example" onClear={onClear} onChange={onChange} />);
    const closeIcon = screen.getByTestId("close-button");
    userEvent.click(closeIcon);
    expect(onClear).toHaveBeenCalled();
  });
});
