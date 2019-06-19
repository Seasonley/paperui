describe("dropdownlistComboBox", function() {
  before(function(browser, done) {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible("#app", 5000, () => done());
  });
  it("from:unfocus;input:click|focus", function(browser) {
    browser.assert
      .elementPresent(".test-dropdownlistComboBox")
      .assert.elementCount(
        ".test-dropdownlistComboBox button[role='combobox']",
        1
      );

    browser
      .click(".test-dropdownlistComboBox button[role='combobox']")
      .expect.element(".test-dropdownlistComboBox .p-combobox-dropdown").to.be
      .visible;
  });

  after(function(browser, done) {
    done();
  });
});
