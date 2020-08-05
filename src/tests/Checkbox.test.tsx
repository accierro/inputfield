import * as React from "react";
import Checkbox from "../components/Checkbox";
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

  test("displays correct value", () => {
    const { container, rerender } = render(
      <Checkbox id="simple" label="Test" value={true} onChange={() => {}} />
    );

    expect(document.querySelector("input")?.checked).toEqual(true);

    rerender(
      <Checkbox id="simple" label="Test" value={false} onChange={() => {}} />
    );
    expect(document.querySelector("input")?.checked).toEqual(false);
  });

  test("onChange event is fired", () => {
    const mockFn = jest.fn();
    const { container } = render(
      <Checkbox id="simple" label="Test" value={true} onChange={mockFn} />
    );
    fireEvent.click(document.querySelector("input") ?? window);
    expect(mockFn).toBeCalledTimes(1);
    expect(mockFn).toBeCalledWith(false);
  });
});
