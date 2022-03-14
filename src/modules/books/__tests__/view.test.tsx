import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import View from "../view";

configure({ adapter: new Adapter() });

describe("Test Detail Book render", () => {
  it("Render", () => {
    const wrapper = shallow(<View book={{ id: 1, title: "title" }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
