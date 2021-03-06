import { newSpecPage } from "@stencil/core/testing";

import { ZChip } from "./index";

describe("Suite test ZChip", () => {
  it("Test render ZChip empty", async () => {

    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip></z-chip>`
    });

    expect(page.root).toEqualHtml(`
        <z-chip>
          <mock:shadow-root>
          <div>
          <span class="boldtext"></span>&nbsp;
          </div>
        </mock:shadow-root>
      </z-chip>
    `);
  });
  
  
  it("Test render ZChip with values", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip boldtext="20" regulartext="libri trovati"></z-chip>`
    });

    expect(page.root).toEqualHtml(`
        <z-chip boldtext="20" regulartext="libri trovati">
          <mock:shadow-root>
         <div>
          <span class="boldtext">20</span>&nbsp;libri trovati
      </div>
        </mock:shadow-root>
      </z-chip>
    `);
  });
});

