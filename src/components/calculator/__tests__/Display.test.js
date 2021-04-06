import React from "react";
import renderer from "react-test-renderer";
import Display from "../Display";

describe.only("Test Display Snapshot", () => {
  it("matches Display snapshot", () => {
    const forTest = renderer.create(<Display></Display>).toJSON();
    expect(forTest).toMatchSnapshot();
  });
});
