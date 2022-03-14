import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Book from "../books";

configure({ adapter: new Adapter() });

describe("Test Book render", () => {
  it("Render", () => {
    const wrapper = shallow(<Book />);
    expect(wrapper).toMatchSnapshot();
  });
});
