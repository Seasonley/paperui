import { expect } from "chai";
import { mount } from "@vue/test-utils";
import ComboBox from "@/components/ComboBox.vue";
/*
style & a11y
*/
describe("ComboBox", () => {
  describe("style & a11y", () => {
    it("dropdownlist style & a11y", () => {
      const rooter = mount(ComboBox, { propsData: { kind: "dropdownlist" } });
      expect(
        rooter.contains(
          'button[role="combobox"][aria-autocomplete="list"][aria-haspopup="true"]'
        )
      ).to.be.true;
    });
    it("dropdown|button style & a11y", () => {
      const rooter = mount(ComboBox, { propsData: { kind: "dropdown" } });
      expect(
        rooter.contains(
          'input[type="text"][role="combobox"][aria-autocomplete="both"]'
        )
      ).to.be.true;
    });
    it("disabled style & a11y", () => {
      const rooter = mount(ComboBox, { propsData: { disabled: "" } });
      expect(
        rooter.contains(
          'button[role="combobox"][aria-disabled="true"][aria-expanded="false"]'
        )
      ).to.be.true;
    });
  });
  describe("FSM", () => {
    it(`from: unfocused; \n\t input:click|focus;`, () => {
      const rooter = mount(ComboBox, { kind: "dropdown" });
      rooter.find({ ref: "input" }).trigger("focus");

      expect(rooter.vm.$data.expanded).to.eq(true);
    });
  });
});

/*
state

from: unexpanded;unselected;
input:click|focus;
to:expanded;focus;unselected;aria-expanded=true

from:expanded;focus;unselected;
input:down;
to:1st abled selected;aria-activedescendant=optionId;option aria-selected=true

from: abled selected
input:right;
to:right abled selected|unchange

from: abled selected
input:left;
to:left selected|unchange

from: abled selected
input:up;
to:up abled selected|unchange

from: abled selected
input:down;
to:down abled selected|unchange

from: abled selected
input:home;
to:last abled selected|unchange

from: abled selected
input:end;
to:1st abled selected|unchange


from: abled selected
input:esc
to:expanded;focus;unselected;

from:last abled selected
input:enter
to:unexpanded;selected;focus;

*/
