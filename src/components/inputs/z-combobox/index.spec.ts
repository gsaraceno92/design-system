import { newSpecPage } from "@stencil/core/testing";

import { ZCombobox } from "./index";

describe("Suite test ZCombobox", () => {
  it("Test render ZCombobox chiusa", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox items='[]'></z-combobox>`
    });
    page.rootInstance.isopen = false;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-combobox items='[]'>
        <mock:shadow-root>
          <div class="false" data-action="combo-undefined">
            <div class="header" role="button" tabindex="0">
              <h2><span></span></h2>
              <z-icon name="caret-down" width="18" height="18" />
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox chiusa con attributi", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox items='[]' inputid="combobox" label="label" isfixed></z-combobox>`
    });
    page.rootInstance.isopen = false;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-combobox items='[]' inputid="combobox" label="label" isfixed>
        <mock:shadow-root>
          <div class="false fixed" id="combobox" data-action="combo-combobox">
            <div class="header" role="button" tabindex="0">
              <h2>
                label
                <span></span>
              </h2>
              <z-icon name="caret-down" width="18" height="18" />
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox chiusa con attributi ed elemento selezionato", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]' inputid="combobox" label="label"></z-combobox>`
    });
    page.rootInstance.isopen = false;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-combobox items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]' inputid="combobox" label="label">
        <mock:shadow-root>
          <div class="false" data-action="combo-combobox" id="combobox">
            <div class="header" role="button" tabindex="0">
              <h2>
                label
                <span>(1)</span>
              </h2>
              <z-icon name="caret-down" width="18" height="18" />
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox aperta vuota", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox items='[]' noresultslabel='non ci sono risultati'></z-combobox>`
    });
    expect(page.root).toEqualHtml(`
      <z-combobox items='[]' noresultslabel='non ci sono risultati'>
        <mock:shadow-root>
          <div class="open false" data-action="combo-undefined">
            <div class="header" role="button" tabindex="0">
              <h2><span></span></h2>
              <z-icon name="caret-down" width="18" height="18"></z-icon>
            </div>
            <div class="openComboData">
              <div tabindex="-1">
                <ul></ul>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox aperta con elementi", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox inputid="combo" label="combo" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'></z-combobox>`
    });
    expect(page.root).toEqualHtml(`
      <z-combobox inputid="combo" label="combo" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'>
        <mock:shadow-root>
          <div class="open false" data-action="combo-combo" id="combo">
            <div class="header" role="button" tabindex="0">
              <h2>combo<span>(1)</span></h2>
              <z-icon name="caret-down" width="18" height="18" />
            </div>
            <div class="openComboData">
              <div tabindex="-1">
                <ul>
                  <z-list-item id="item_1" listitemid="item_1" action="combo-li-combo" underlined="">
                    <z-input disabled="0" type="checkbox" htmlid="combo-checkbox-combo-item_1" label="primo elemento"></z-input>
                  </z-list-item>
                  <z-list-item id="item_2" listitemid="item_2" action="combo-li-combo">
                    <z-input type="checkbox" htmlid="combo-checkbox-combo-item_2" label="secondo elemento" checked></z-input>
                  </z-list-item>
                </ul>
              </div
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox aperta con ricerca", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox inputid="combo" label="combo" hassearch=true searchlabel="cerca" searchplaceholder="placeholder" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'></z-combobox>`
    });
    expect(page.root).toEqualHtml(`
      <z-combobox inputid="combo" label="combo" hassearch=true searchlabel="cerca" searchplaceholder="placeholder" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'>
        <mock:shadow-root>
          <div class="open false" data-action="combo-combo" id="combo">
            <div class="header" role="button" tabindex="0">
              <h2>combo<span>(1)</span></h2>
              <z-icon name="caret-down" width="18" height="18" />
            </div>
            <div class="openComboData">
              <z-input htmlid="combo_search" label="cerca" placeholder="placeholder" type="text"></z-input>
              <div tabindex="-1">
                <ul>
                  <z-list-item id="item_1" listitemid="item_1" action="combo-li-combo" underlined="">
                    <z-input disabled="0" type="checkbox" htmlid="combo-checkbox-combo-item_1" label="primo elemento"></z-input>
                  </z-list-item>
                  <z-list-item id="item_2" listitemid="item_2" action="combo-li-combo">
                    <z-input type="checkbox" htmlid="combo-checkbox-combo-item_2" label="secondo elemento" checked></z-input>
                  </z-list-item>
                </ul>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox aperta con ricerca attiva e risultati", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox inputid="combo" label="combo" hassearch=true searchlabel="cerca" searchplaceholder="placeholder" closesearchtext="CHIUDI" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'></z-combobox>`
    });
    page.rootInstance.searchValue = "primo";
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-combobox inputid="combo" label="combo" hassearch=true searchlabel="cerca" searchplaceholder="placeholder" closesearchtext="CHIUDI" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'>
        <mock:shadow-root>
          <div class="open false" data-action="combo-combo" id="combo">
            <div class="header" role="button" tabindex="0">
              <h2>combo<span>(1)</span></h2>
              <z-icon name="caret-down" width="18" height="18" />
            </div>
            <div class="openComboData">
              <z-input htmlid="combo_search" label="cerca" placeholder="placeholder" type="text" value="primo"></z-input>
              <div class="search" tabindex="-1">
                <ul>
                  <z-list-item id="item_1" listitemid="item_1" action="combo-li-combo">
                    <z-input disabled="0" type="checkbox" htmlid="combo-checkbox-combo-item_1" label="<b>primo</b> elemento"></z-input>
                  </z-list-item>
                </ul>
                <div>
                  <a role="button" tabindex="0">CHIUDI</a>
                </div>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox aperta con ricerca attiva senza testo di chiusura della ricerca testuale", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox inputid="combo" label="combo" hassearch=true searchlabel="cerca" searchplaceholder="placeholder" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'></z-combobox>`
    });
    page.rootInstance.searchValue = "primo";
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-combobox inputid="combo" label="combo" hassearch=true searchlabel="cerca" searchplaceholder="placeholder" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'>
        <mock:shadow-root>
          <div class="open false" data-action="combo-combo" id="combo">
            <div class="header" role="button" tabindex="0">
              <h2>combo<span>(1)</span></h2>
              <z-icon name="caret-down" width="18" height="18" />
            </div>
            <div class="openComboData">
              <z-input htmlid="combo_search" label="cerca" placeholder="placeholder" type="text" value="primo"></z-input>
              <div class="search" tabindex="-1">
                <ul>
                  <z-list-item id="item_1" listitemid="item_1" action="combo-li-combo">
                    <z-input disabled="0" type="checkbox" htmlid="combo-checkbox-combo-item_1" label="<b>primo</b> elemento"></z-input>
                  </z-list-item>
                </ul>
                <div>
                  <a role="button" tabindex="0">Chiudi</a>
                </div>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox aperta con ricerca attiva senza risultati", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox inputid="combo" label="combo" hassearch=true searchlabel="cerca" searchplaceholder="placeholder" closesearchtext="CHIUDI" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]' noresultslabel='non ci sono risultati'></z-combobox>`
    });
    page.rootInstance.searchValue = "prova";
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-combobox inputid="combo" label="combo" hassearch=true searchlabel="cerca" searchplaceholder="placeholder" closesearchtext="CHIUDI" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]' noresultslabel='non ci sono risultati'>
        <mock:shadow-root>
          <div class="open false" data-action="combo-combo" id="combo">
            <div class="header" role="button" tabindex="0">
              <h2>combo<span>(1)</span></h2>
              <z-icon name="caret-down" width="18" height="18" />
            </div>
            <div class="openComboData">
              <z-input htmlid="combo_search" label="cerca" placeholder="placeholder" type="text" value="prova"></z-input>
              <div class="search" tabindex="-1">
                <ul>
                  <z-list-item id='no-results' text='non ci sono risultati' listitemid='no-results' icon='multiply-circle'></z-list-item>
                </ul>
                <div>
                  <a role="button" tabindex="0">CHIUDI</a>
                </div>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox aperta con check all", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox inputid="combo" label="combo" hascheckall="true" checkalltext="CHECK" uncheckalltext="UNCHECK" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'></z-combobox>`
    });
    expect(page.root).toEqualHtml(`
      <z-combobox inputid="combo" label="combo" hascheckall="true" checkalltext="CHECK" uncheckalltext="UNCHECK" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'>
        <mock:shadow-root>
          <div class="open false" data-action="combo-combo" id="combo">
            <div class="header" role="button" tabindex="0">
              <h2>combo<span>(1)</span></h2>
              <z-icon name="caret-down" width="18" height="18" />
            </div>
            <div class="openComboData">
              <div class="checkAllWrapper">
                <z-input type="checkbox" htmlid="combo-checkbox-combo-check-all" label="CHECK" disabled="0" />
              </div>
              <div tabindex="-1">
                <ul>
                  <z-list-item id="item_1" listitemid="item_1" action="combo-li-combo" underlined="">
                    <z-input disabled="0" type="checkbox" htmlid="combo-checkbox-combo-item_1" label="primo elemento"></z-input>
                  </z-list-item>
                  <z-list-item id="item_2" listitemid="item_2" action="combo-li-combo">
                    <z-input type="checkbox" htmlid="combo-checkbox-combo-item_2" label="secondo elemento" checked></z-input>
                  </z-list-item>
                </ul>
              </div
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox aperta con uncheck all", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox inputid="combo" label="combo" hascheckall="true" checkalltext="CHECK" uncheckalltext="UNCHECK" items='[{"id":"item_1","name":"primo elemento","checked":true},{"id":"item_2","name":"secondo elemento","checked":true}]'></z-combobox>`
    });
    expect(page.root).toEqualHtml(`
      <z-combobox inputid="combo" label="combo" hascheckall="true" checkalltext="CHECK" uncheckalltext="UNCHECK" items='[{"id":"item_1","name":"primo elemento","checked":true},{"id":"item_2","name":"secondo elemento","checked":true}]'>
        <mock:shadow-root>
          <div class="open false" data-action="combo-combo" id="combo">
            <div class="header" role="button" tabindex="0">
              <h2>combo<span>(2)</span></h2>
              <z-icon name="caret-down" width="18" height="18" />
            </div>
            <div class="openComboData">
              <div class="checkAllWrapper">
                <z-input type="checkbox" htmlid="combo-checkbox-combo-check-all" label="UNCHECK" checked disabled="0" />
              </div>
              <div tabindex="-1">
                <ul>
                  <z-list-item id="item_1" listitemid="item_1" action="combo-li-combo" underlined="">
                    <z-input type="checkbox" htmlid="combo-checkbox-combo-item_1" label="primo elemento" checked></z-input>
                  </z-list-item>
                  <z-list-item id="item_2" listitemid="item_2" action="combo-li-combo">
                    <z-input type="checkbox" htmlid="combo-checkbox-combo-item_2" label="secondo elemento" checked></z-input>
                  </z-list-item>
                </ul>
              </div
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox aperta con max checkable items", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox inputid="combo" label="combo" maxcheckableitems="1" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'></z-combobox>`
    });
    expect(page.root).toEqualHtml(`
      <z-combobox inputid="combo" label="combo" maxcheckableitems="1" items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'>
        <mock:shadow-root>
          <div class="open false" data-action="combo-combo" id="combo">
            <div class="header" role="button" tabindex="0">
              <h2>combo<span>(1)</span></h2>
              <z-icon name="caret-down" width="18" height="18" />
            </div>
            <div class="openComboData">
              <div tabindex="-1">
                <ul>
                  <z-list-item id="item_1" listitemid="item_1" action="combo-li-combo" underlined="">
                    <z-input disabled="" type="checkbox" htmlid="combo-checkbox-combo-item_1" label="primo elemento"></z-input>
                  </z-list-item>
                  <z-list-item id="item_2" listitemid="item_2" action="combo-li-combo">
                    <z-input type="checkbox" htmlid="combo-checkbox-combo-item_2" label="secondo elemento" checked></z-input>
                  </z-list-item>
                </ul>
              </div
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox aperta con maxcheckableitems + check all", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox inputid="combo" label="combo" maxcheckableitems="3" hascheckall="true" checkalltext="CHECK" uncheckalltext="UNCHECK" items='[{"id":"item_1","name":"primo elemento","checked":true},{"id":"item_2","name":"secondo elemento","checked":false}]'></z-combobox>`
    });
    expect(page.root).toEqualHtml(`
      <z-combobox inputid="combo" label="combo" maxcheckableitems="3" hascheckall="true" checkalltext="CHECK" uncheckalltext="UNCHECK" items='[{"id":"item_1","name":"primo elemento","checked":true},{"id":"item_2","name":"secondo elemento","checked":false}]'>
        <mock:shadow-root>
          <div class="open false" data-action="combo-combo" id="combo">
            <div class="header" role="button" tabindex="0">
              <h2>combo<span>(1)</span></h2>
              <z-icon name="caret-down" width="18" height="18" />
            </div>
            <div class="openComboData">
              <div class="checkAllWrapper">
                <z-input type="checkbox" htmlid="combo-checkbox-combo-check-all" label="CHECK" />
              </div>
              <div tabindex="-1">
                <ul>
                  <z-list-item id="item_1" listitemid="item_1" action="combo-li-combo" underlined="">
                    <z-input type="checkbox" htmlid="combo-checkbox-combo-item_1" label="primo elemento" checked></z-input>
                  </z-list-item>
                  <z-list-item id="item_2" listitemid="item_2" action="combo-li-combo">
                    <z-input type="checkbox" htmlid="combo-checkbox-combo-item_2" label="secondo elemento"></z-input>
                  </z-list-item>
                </ul>
              </div
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });

  it("Test render ZCombobox aperta con maxcheckableitems + check all (disabled)", async () => {
    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox inputid="combo" label="combo" maxcheckableitems="1" hascheckall="true" checkalltext="CHECK" uncheckalltext="UNCHECK" items='[{"id":"item_1","name":"primo elemento","checked":true},{"id":"item_2","name":"secondo elemento","checked":false}]'></z-combobox>`
    });
    expect(page.root).toEqualHtml(`
      <z-combobox inputid="combo" label="combo" maxcheckableitems="1" hascheckall="true" checkalltext="CHECK" uncheckalltext="UNCHECK" items='[{"id":"item_1","name":"primo elemento","checked":true},{"id":"item_2","name":"secondo elemento","checked":false}]'>
        <mock:shadow-root>
          <div class="open false" data-action="combo-combo" id="combo">
            <div class="header" role="button" tabindex="0">
              <h2>combo<span>(1)</span></h2>
              <z-icon name="caret-down" width="18" height="18" />
            </div>
            <div class="openComboData">
              <div class="checkAllWrapper">
                <z-input type="checkbox" disabled htmlid="combo-checkbox-combo-check-all" label="CHECK" />
              </div>
              <div tabindex="-1">
                <ul>
                  <z-list-item id="item_1" listitemid="item_1" action="combo-li-combo" underlined="">
                    <z-input type="checkbox" htmlid="combo-checkbox-combo-item_1" label="primo elemento" checked></z-input>
                  </z-list-item>
                  <z-list-item id="item_2" listitemid="item_2" action="combo-li-combo">
                    <z-input type="checkbox" htmlid="combo-checkbox-combo-item_2" label="secondo elemento" disabled></z-input>
                  </z-list-item>
                </ul>
              </div
            </div>
          </div>
        </mock:shadow-root>
      </z-combobox>
    `);
  });
});
