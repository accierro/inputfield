import * as React from "react";
import { shallow } from "enzyme";
import TextInput from "../components/TextInput";
it("Renders without crashing", () => {
  const wrapper = shallow(<TextInput />);
  expect(wrapper).toMatchSnapshot();
});
