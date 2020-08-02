import * as React from "react";
import TextInput from "../components/TextInput";
//@ts-ignore
import {
  render,
  cleanup,
  fireEvent,
  getByText,
  getByRole,
  queryByText,
} from "@testing-library/react";

describe("<TextInput />", () => {
  afterEach(() => {
    cleanup();
  });
  test("matches a snapshot", () => {
    const { container } = render(
      <TextInput label="Test" value="" onChange={() => {}} />
    );
    expect(container).toMatchSnapshot();
  });

  test("shows optional if the prop is passed", () => {
    const { container, rerender } = render(
      <TextInput label="Test" optional value="" onChange={() => {}} />
    );
    expect(getByText(container, "Optional")).toBeInTheDocument();

    rerender(<TextInput label="Test" value="" onChange={() => {}} />);
    expect(queryByText(container, "Optional")).toBeNull();
  });

  test("shows warning error if error prop is passed", () => {
    const { container } = render(
      <TextInput
        label="Test"
        value=""
        error="Can't be empty"
        onChange={() => {}}
      />
    );
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();

    if (svg) {
      fireEvent.mouseOver(svg);
    }
    expect(getByText(container, "Can't be empty")).toBeInTheDocument();
  });

  test("displays correct value", () => {
    const { container, rerender } = render(
      <TextInput label="Test" value="Hello" onChange={() => {}} />
    );

    expect(getByRole(container, "textbox").getAttribute("value")).toEqual(
      "Hello"
    );

    rerender(<TextInput label="Test" value="1" onChange={() => {}} />);
    expect(getByRole(container, "textbox").getAttribute("value")).toEqual("1");
  });

  test("onChange event is fired", () => {
    const mockFn = jest.fn();
    const { container } = render(
      <TextInput label="Test" value="Hello" onChange={mockFn} />
    );
    fireEvent.change(getByRole(container, "textbox"), {
      target: { value: "check" },
    });
    expect(mockFn).toBeCalledTimes(1);
    expect(mockFn).toBeCalledWith("check");
  });
});
