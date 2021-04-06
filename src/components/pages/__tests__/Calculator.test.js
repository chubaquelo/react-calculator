import React from "react"
import renderer from "react-test-renderer"
import Calculator from "../Calculator"

describe("Test Calculator Snapshot", () => {
  it("matches Calculator snapshot", () => {
    const forTest = renderer.create(<Calculator></Calculator>).toJSON();
    expect(forTest).toMatchSnapshot();
  });
});
