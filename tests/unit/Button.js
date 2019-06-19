import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Button from "@/components/Button.vue";

describe("Button", () => {
  it("renders props.msg when passed", () => {
    const defaultString = "Submit";
    const wrapper = shallowMount(Button);
    expect(wrapper.text()).to.eq(defaultString);
  });
});
