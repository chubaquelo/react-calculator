import React from "react";
import renderer from "react-test-renderer";
import QuoteOfDay from "../QuoteOfDay";

describe("Test QuoteOfDay Snapshot", () => {
  it("matches QuoteOfDay snapshot", () => {
    const forTest = renderer.create(<QuoteOfDay></QuoteOfDay>).toJSON();
    expect(forTest).toMatchSnapshot();
  });
});
