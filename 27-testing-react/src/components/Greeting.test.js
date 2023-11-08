import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("<Greeting />", () => {
  test("should render Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ...nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("should render 'good to see you' if button was NOT clicked", () => {
    render(<Greeting />);
    const outputElement = screen.getByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("should render 'changed' if button WAS clicked", () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("should not render 'good to see you' if button WAS clicked", () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
