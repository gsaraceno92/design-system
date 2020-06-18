import { newSpecPage } from '@stencil/core/testing';

import { ZCardBody } from './index';

describe(`Suite test ZCardBody`, function () {
  it(`Test render ZCardBody vuoto`, async function () {
    const page = await newSpecPage({
      components: [ZCardBody],
      html: `<z-card-body></z-card-body>`,
    });

    expect(page.root).toEqualHtml(`
    <z-card-body>
      <mock:shadow-root>
        <div>
          <slot name=\"alert\"></slot>
          <slot name=\"cover\"></slot>
        </div>
      </mock:shadow-root>
    </z-card-body>
    `);
  });
});
