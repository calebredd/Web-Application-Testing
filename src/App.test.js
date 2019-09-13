import React from "react";
import { render, shallow } from "@testing-library/react";
import App from "./App";
import { stricken, foulen, ballen } from "./components/Dashboard";
import Dashboard from "./components/Dashboard";

it("renders without crashing", () => {
  render(<App />);
});
it("renders without crashing", () => {
  render(<Dashboard />);
});

test("strike adds 1 strike", () => {
  expect(stricken(0)).toBe(1);
});
test("strike adds 1 strike", () => {
  expect(stricken(1)).toBe(2);
});

test("strike checks if there are more than 3 strikes", () => {
  expect(stricken(2)).toBe("Out");
});

test("strike checks if there are more than 3 strikes", () => {
  expect(stricken(5)).toBe("Out");
});

test("Foul ball test should return number of strikes or foul", () => {
  expect(foulen(2)).toBe("foul");
});

test("Foul ball test should return number of strikes or foul", () => {
  expect(foulen(1)).toBe(2);
});

test("Ball test should return number of balls or walk", () => {
  expect(ballen(1)).toBe(2);
});

test("Ball test should return number of balls or walk", () => {
  expect(ballen(3)).toBe("walk");
});

// describe("Test Button component", () => {
//   it("Test click event", () => {
//     const mockCallBack = jest.fn();

//     const button = <Dashboard onClick={mockCallBack}>Ok!</Dashboard>;
//     button
//       .find("button")
//       .at(0)
//       .simulate("click");
//     expect(mockCallBack.mock.calls.length).toEqual(1);
//   });
// });
