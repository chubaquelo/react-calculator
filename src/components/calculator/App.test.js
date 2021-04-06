import React from "react"
import renderer from "react-test-renderer"
import App from "./App"

describe.only('Test App Snapshot', () => {
  it('matches App snapshot', () => {
    const forTest = renderer.create(<App></App>).toJSON()
    expect(forTest).toMatchSnapshot()
  })
})

