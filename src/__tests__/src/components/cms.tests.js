
import React from "react";

import renderer from "react-test-renderer";
import CMS from "../../../components/cms/cms.js";

describe("<CMS />", () => {
  it("is alive", () => {
    expect(true).toBeTruthy;
  });

  it("changes state on a click", () => {
    let component = mount(<CMS />);
    let link = component.find("#rig");
    // link.simulate("click");
    // expect(component.state("count")).toBe(1);
    // expect(component.find("span").text()).toContain("1");
  });

  it("decrements number", () => {
    // let component = mount(<Counter />);
    // let link = component.find("#left");
    // link.simulate("click");
    // expect(component.state("count")).toBe(-1);
    // expect(component.find("span").text()).toContain("1");
  });

  it('renders correctly', ()=>{
    // const tree = renderer.create(<Counter/>).toJSON();
    // expect(tree).toMatchSnapshot();
    })

});