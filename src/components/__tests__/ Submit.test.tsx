import * as React from "react";
import Submit from "../Submit";
//@ts-ignore
import {
  render,
  cleanup,
  fireEvent,
  getByText,
  getByRole,
  queryByText,
} from "@testing-library/react";

describe("<Checkbox />", () => {
  afterEach(() => {
    cleanup();
  });

  test("is disabled when disabled props is passed", () => {
    const mockFn = jest.fn();
    const { container, rerender } = render(
      <form onSubmit={mockFn}>
        <Submit disabled placeholder="Submit" />
      </form>
    );

    let input = document.querySelector("input");
    input?.click();
    expect(mockFn).not.toBeCalled();
    rerender(
      <form
        onSubmit={(e) => {
          e.preventDefault();
          mockFn();
        }}
      >
        <Submit placeholder="Submit" />
      </form>
    );
    input = document.querySelector("input");
    fireEvent.click(input ?? window);
    expect(mockFn).toBeCalled();
  });

  test("onSubmit is triggered", () => {
    const mockFn = jest.fn();
    render(
      <form
        onSubmit={(e) => {
          e.preventDefault();
          mockFn();
        }}
      >
        <Submit placeholder="Submit" />
      </form>
    );
    const input = document.querySelector("input");
    fireEvent.click(input ?? window);
    expect(mockFn).toBeCalled();
  });
});
