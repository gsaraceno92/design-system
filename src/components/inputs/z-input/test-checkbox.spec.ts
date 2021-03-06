import { newSpecPage } from "@stencil/core/testing";

import { ZInput } from "./index";

describe("Suite test ZInput - checkbox", () => {
  it("Test render ZInput vuoto", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input htmlid="checkid" type="checkbox"></z-input>`
    });
    expect(page.root).toEqualHtml(`
      <z-input htmlid="checkid" type="checkbox">
        <mock:shadow-root>
          <div class="checkboxWrapper">
            <input id="checkid" type="checkbox" />
            <label htmlFor="checkid" class="checkboxLabel after">
              <z-icon name="checkbox" aria-hidden></z-icon>
            </label>
          </div>
        </mock:shadow-root>
      </z-input>
    `);
  });

  it("Test render ZInput with attributes", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input htmlid="checkid" type="checkbox" name="name" value="value" label="checkbox label"></z-input>`
    });
    expect(page.root).toEqualHtml(`
      <z-input htmlid="checkid" type="checkbox" name="name" value="value" label="checkbox label">
        <mock:shadow-root>
          <div class="checkboxWrapper">
            <input id="checkid" type="checkbox" name="name" value="value" />
            <label htmlFor="checkid" class="checkboxLabel after">
              <z-icon name="checkbox" aria-hidden></z-icon>
              <span>checkbox label</span>
            </label>
          </div>
        </mock:shadow-root>
      </z-input>
    `);
  });

  it("Test render ZInput checked", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input htmlid="checkid" type="checkbox" checked></z-input>`
    });
    expect(page.root).toEqualHtml(`
      <z-input htmlid="checkid" type="checkbox" checked>
        <mock:shadow-root>
          <div class="checkboxWrapper">
            <input id="checkid" type="checkbox" checked />
            <label htmlFor="checkid" class="checkboxLabel after">
              <z-icon name="checkbox-checked" aria-hidden></z-icon>
            </label>
          </div>
        </mock:shadow-root>
      </z-input>
    `);
  });

  it("Test render ZInput label before", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input htmlid="checkid" type="checkbox" labelafter="false"></z-input>`
    });
    expect(page.root).toEqualHtml(`
      <z-input htmlid="checkid" type="checkbox" labelafter="false">
        <mock:shadow-root>
          <div class="checkboxWrapper">
            <input id="checkid" type="checkbox" />
            <label htmlFor="checkid" class="checkboxLabel before">
              <z-icon name="checkbox" aria-hidden></z-icon>
            </label>
          </div>
        </mock:shadow-root>
      </z-input>
    `);
  });

  it("Test render ZInput disabled", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input htmlid="checkid" type="checkbox" disabled></z-input>`
    });
    expect(page.root).toEqualHtml(`
      <z-input htmlid="checkid" type="checkbox" disabled>
        <mock:shadow-root>
          <div class="checkboxWrapper">
            <input id="checkid" type="checkbox" disabled />
            <label htmlFor="checkid" class="checkboxLabel after">
              <z-icon name="checkbox" aria-hidden></z-icon>
            </label>
          </div>
        </mock:shadow-root>
      </z-input>
    `);
  });

  it("Test render ZInput readonly", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input htmlid="checkid" type="checkbox" readonly></z-input>`
    });
    expect(page.root).toEqualHtml(`
        <z-input htmlid="checkid" type="checkbox" readonly>
          <mock:shadow-root>
            <div class="checkboxWrapper">
              <input id="checkid" type="checkbox" readonly />
              <label htmlFor="checkid" class="checkboxLabel after">
                <z-icon name="checkbox" aria-hidden></z-icon>
              </label>
            </div>
          </mock:shadow-root>
        </z-input>
      `);
  });
});
