import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Detail from "../detail";

configure({ adapter: new Adapter() });

describe("Test Detail Book render", () => {
  it("Render", () => {
    const wrapper = shallow(<Detail book={{ id: 1, title: "title" }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
