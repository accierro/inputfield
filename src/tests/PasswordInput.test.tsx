import * as React from "react";
import PasswordInput from "../components/PasswordInput";
//@ts-ignore
import {
  render,
  cleanup,
  fireEvent,
  getByText,
  getByRole,
  queryByText,
} from "@testing-library/react";

describe("<PasswordInput />", () => {
  afterEach(() => {
    cleanup();
  });

  test("shows warning error if error prop is passed", () => {
    const { container, debug } = render(
      <PasswordInput
        id="simple"
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
    expect(document.querySelector("#warning-icon-input")).toBeInTheDocument();
  });

  test("displays correct value", () => {
    const { container, rerender } = render(
      <PasswordInput
        id="simple"
        label="Test"
        value="Hello"
        onChange={() => {}}
      />
    );

    expect(document.querySelector("input")?.getAttribute("value")).toEqual(
      "Hello"
    );

    rerender(
      <PasswordInput id="simple" label="Test" value="1" onChange={() => {}} />
    );
    expect(document.querySelector("input")?.getAttribute("value")).toEqual("1");
  });

  test("onChange event is fired", () => {
    const mockFn = jest.fn();
    const { container } = render(
      <PasswordInput id="simple" label="Test" value="Hello" onChange={mockFn} />
    );
    fireEvent.change(document.querySelector("input") ?? window, {
      target: { value: "check" },
    });
    expect(mockFn).toBeCalledTimes(1);
    expect(mockFn).toBeCalledWith("check");
  });

  test("show/hides password", () => {
    const { container } = render(
      <PasswordInput
        id="simple"
        label="Test"
        value="Hello"
        onChange={() => {}}
      />
    );

    let svg = container.querySelector("svg");
    if (svg) {
      fireEvent.click(svg);
    }
    expect(container.querySelector("input")?.getAttribute("type")).toEqual(
      "text"
    );
    svg = container.querySelector("svg");
    if (svg) {
      fireEvent.click(svg);
    }
    expect(container.querySelector("input")?.getAttribute("type")).toEqual(
      "password"
    );
  });
});
