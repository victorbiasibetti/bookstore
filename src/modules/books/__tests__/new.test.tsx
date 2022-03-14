import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import New from "../new";

configure({ adapter: new Adapter() });

describe("Test New Book render", () => {
  it("Render", () => {
    const wrapper = shallow(<New />);
    expect(wrapper).toMatchSnapshot();
  });
});
