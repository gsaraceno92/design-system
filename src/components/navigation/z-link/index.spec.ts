import { newSpecPage } from "@stencil/core/testing";

import { ZLink } from "./index";

describe("Suite test ZLink", () => {
  it("Test render ZLink vuoto", async () => {
    const page = await newSpecPage({
      components: [ZLink],
      html: `<z-link></z-link>`
    });
    expect(page.root).toEqualHtml(`
      <z-link>
        <mock:shadow-root>
          <a class="false" role="button" tabindex="0" target="_self">
            <slot></slot>
          </a>
        </mock:shadow-root>
      </z-link>
    `);
  });

  it("Test render ZLink con link", async () => {
    const page = await newSpecPage({
      components: [ZLink],
      html: `<z-link href="http://www.google.com/"></z-link>`
    });
    expect(page.root).toEqualHtml(`
      <z-link href="http://www.google.com/">
        <mock:shadow-root>
          <a href="http://www.google.com/" class="false" role="link"  tabindex="0" target="_self">
            <slot></slot>
          </a>
        </mock:shadow-root>
      </z-link>
    `);
  });

  it("Test render ZLink con label", async () => {
    const page = await newSpecPage({
      components: [ZLink],
      html: `<z-link>label</z-link>`
    });
    expect(page.root).toEqualHtml(`
      <z-link>
        <mock:shadow-root>
          <a class="false" role="button"  tabindex="0" target="_self">
            <slot></slot>
          </a>
        </mock:shadow-root>
        label
      </z-link>
    `);
  });

  it("Test render ZLink con icon", async () => {
    const page = await newSpecPage({
      components: [ZLink],
      html: `<z-link icon="icon"></z-link>`
    });
    expect(page.root).toEqualHtml(`
      <z-link icon="icon">
        <mock:shadow-root>
          <a class="false" role="button" tabindex="0" target="_self">
            <z-icon height="12" name="icon" width="12"></z-icon>
            <slot></slot>
          </a>
        </mock:shadow-root>
      </z-link>
    `);
  });

  it("Test render ZLink disabled", async () => {
    const page = await newSpecPage({
      components: [ZLink],
      html: `<z-link isdisabled></z-link>`
    });
    expect(page.root).toEqualHtml(`
      <z-link isdisabled>
        <mock:shadow-root>
          <a class="disabled false" role="button"  tabindex="0" target="_self">
            <slot></slot>
          </a>
        </mock:shadow-root>
      </z-link>
    `);
  });

  it("Test render ZLink white", async () => {
    const page = await newSpecPage({
      components: [ZLink],
      html: `<z-link iswhite></z-link>`
    });
    expect(page.root).toEqualHtml(`
      <z-link iswhite>
        <mock:shadow-root>
          <a class="white false" role="button" tabindex="0" target="_self">
            <slot></slot>
          </a>
        </mock:shadow-root>
      </z-link>
    `);
  });

  it("Test render ZLink target", async () => {
    const page = await newSpecPage({
      components: [ZLink],
      html: `<z-link target="_blank"></z-link>`
    });
    expect(page.root).toEqualHtml(`
      <z-link target="_blank">
        <mock:shadow-root>
          <a class="false" role="button" tabindex="0" target="_blank">
            <slot></slot>
          </a>
        </mock:shadow-root>
      </z-link>
    `);
  });

  it("Test render ZLink active", async () => {
    const page = await newSpecPage({
      components: [ZLink],
      html: `<z-link isactive></z-link>`
    });
    expect(page.root).toEqualHtml(`
      <z-link isactive>
        <mock:shadow-root>
          <a class="active false" role="button" tabindex="0" target="_self">
            <slot></slot>
          </a>
        </mock:shadow-root>
      </z-link>
    `);
  });
});