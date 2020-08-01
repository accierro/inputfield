import * as React from "react";
import { shallow } from "enzyme";
import Input from "../components/Input";
it("Renders without crashing", () => {
  const wrapper = shallow(<Input />);
  expect(wrapper).toMatchSnapshot();
});
