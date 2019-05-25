/* eslint-env jest */

import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import App from "../pages/index.js";

describe("With Enzyme", () => {
  it('App shows "We love those people—and you will too—because they shares so many great..."', () => {
    const app = shallow(<App />);
    const assertText =
      "We love those people—and you will too—because they shares so many great " +
      "tutorials for Web Developer in Bahasa. Help us to reach more people if " +
      "your favorite ones is not listed here yet.";

    expect(app.find("p").text()).toEqual(assertText);
  });
});

describe("With Snapshot Testing", () => {
  it('App shows "We love those people—and you will too—because they shares so many great..."', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
