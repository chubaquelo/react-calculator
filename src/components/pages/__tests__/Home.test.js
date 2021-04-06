import React from "react";
import renderer from "react-test-renderer";
import Home from "../Home";

describe("Test Home Snapshot", () => {
  it("matches Home snapshot", () => {
    const forTest = renderer.create(<Home></Home>).toJSON();
    expect(forTest).toMatchSnapshot();
  });
});
