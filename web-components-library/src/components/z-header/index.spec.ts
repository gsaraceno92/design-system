import { newSpecPage } from "@stencil/core/testing";

import { ZList } from "../z-list";

import { ZHeader } from "./index";

describe("Suite test ZHeader", () => {
  /*
  TEST MOBILE
   */
  it("Test render ZHeader mobile myz utente non loggato", async () => {
    const page = await newSpecPage({
      components: [ZHeader],
      html: initHeader(false, false, true, false, false)
    });

    //Set mobile state
    page.rootInstance.isMobile = true;
    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
    <z-header extlinkdata="[]" imagealt="logo zanichelli" intlinkdata="[]" ismyz="true" logolink="https://www.zanichelli.it" logopath="./assets/images/png/zanichelli-logo-2.png">
      <mock:shadow-root>
        <header>
          <div class="false mobile-header" id="mobile-header">
            <div class="logo">
              <z-logo imagealt="logo zanichelli" imageurl="./assets/images/png/zanichelli-logo-2.png" link="https://www.zanichelli.it" targetblank=""></z-logo>
            </div>
            <z-button buttonid="login-button" label="entra" type="secondary"></z-button>
          </div>
        </header>
      </mock:shadow-root>
    </z-header>
  `);
  });

  it("Test render ZHeader mobile non myz utente non loggato", async () => {
    const page = await newSpecPage({
      components: [ZHeader],
      html: initHeader(true, false, false, false, false)
    });

    //Set mobile state
    page.rootInstance.isMobile = true;
    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
    <z-header extlinkdata="[]" imagealt="logo zanichelli" intlinkdata="[]" ismyz="false" logolink="https://www.zanichelli.it" logopath="./assets/images/png/zanichelli-logo-2.png" userdata='{"islogged":false,"usergroup":4}'>
    <mock:shadow-root>
      <header>
        <div class="mobile-header myz-out" id="mobile-header">
          <div class="logo">
            <z-logo imagealt="logo zanichelli" imageurl="./assets/images/png/zanichelli-logo-2.png" link="https://www.zanichelli.it" targetblank=""></z-logo>
          </div>
          <z-button buttonid="login-button" label="entra" type="secondary"></z-button>
        </div>
      </header>
    </mock:shadow-root>
  </z-header>
  `);
  });

  it("Test render ZHeader mobile myz loggato", async () => {
    const page = await newSpecPage({
      components: [ZHeader],
      html: initHeader(true, true, true, false, false)
    });

    //Set mobile state
    page.rootInstance.isMobile = true;
    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
    <z-header extlinkdata="[]" imagealt="logo zanichelli" intlinkdata="[]" ismyz="true" logolink="https://www.zanichelli.it" logopath="./assets/images/png/zanichelli-logo-2.png" userdata='{"islogged":true,"id":123456,"name":"Dario Docente e Professore","usergroup":15,"userlinks":[{"label":"Profilo","link":"http://www.zanichelli.it"},{"label":"Esci","link":"#home"}]}'>
    <mock:shadow-root>
      <header>
        <div class="false mobile-header" id="mobile-header">
          <div class="logo">
            <z-logo imagealt="logo zanichelli" imageurl="./assets/images/png/zanichelli-logo-2.png" link="https://www.zanichelli.it" targetblank=""></z-logo>
          </div>
          <div class="menu-mobile" id="mobile-menu-wrapper">
            <div class="false menu-toggle" id="mobile-menu">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </div>
            <span>
              Menu
            </span>
          </div>
        </div>
        <div class="false mobile-content" id="mobile-content">
          <div class="mobile-login" id="mobile-login">
            <span>
              <a class="menu-item" href="#home" id="user-data">
                <span>
                  <z-icon height="16" name="user" width="16"></z-icon>
                  Dario Docente e Professore
                </span>
                <i></i>
              </a>
              <span class="mobile-dropdown" id="mobile-dropdown-user-data">
                <z-list></z-list>
              </span>
            </span>
          </div>
          <hr>
          <div class="link-int" id="link-int"></div>
          <hr>
          <div class="link-ext" id="link-ext"></div>
        </div>
      </header>
    </mock:shadow-root>
  </z-header>
    `);
  });

  it("Test render ZHeader mobile myz loggato open", async () => {
    const page = await newSpecPage({
      components: [ZHeader, ZList],
      html: initHeader(true, true, true, true, true)
    });
    page.rootInstance.isMobile = true;
    page.rootInstance.isMenuMobileOpen = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
    <z-header
      intlinkdata='[{"id":"home","label":"Home","link":"#home","subMenu":[{"id":"libreria","label":"la mia libreria","link":"#libreria"}]},{"id":"Dizionari","label":"Dizionari","link":"https://www.zanichelli.it/dizionari/in-primo-piano"}]'
      extlinkdata='[{"id":"supporto","label":"Supporto","link":"https://www.zanichelli.it/contatti-e-recapiti","icon":"question-mark.png"}]'
      imagealt="logo zanichelli"
      userdata='{"islogged":true,"id":123456,"name":"Dario Docente e Professore","usergroup":15,"userlinks":[{"label":"Profilo","link":"http://www.zanichelli.it"},{"label":"Esci","link":"#home"}]}'
      ismyz="true"
      logolink="https://www.zanichelli.it"
      logopath="./assets/images/png/zanichelli-logo-2.png"
    >
      <mock:shadow-root>
        <header>
          <div class="false mobile-header" id="mobile-header">
            <div class="logo">
              <z-logo imagealt="logo zanichelli" imageurl="./assets/images/png/zanichelli-logo-2.png" link="https://www.zanichelli.it" targetblank=""></z-logo>
            </div>
            <div class="menu-mobile" id="mobile-menu-wrapper">
              <div class="menu-toggle is-active" id="mobile-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
              </div>
              <span>Menu</span>
            </div>
          </div>
          <div id="mobile-content" class="mobile-content open false">
            <div id="mobile-login" class="mobile-login">
              <span>
                <a class="menu-item" id="user-data" href="#home">
                  <span>
                    <z-icon height="16" name="user" width="16"></z-icon>
                    Dario Docente e Professore
                  </span>
                  <i></i>
                </a>
                <span class="mobile-dropdown" id="mobile-dropdown-user-data">
                  <z-list>
                    <mock:shadow-root>
                      <ul>
                        <z-list-item link="http://www.zanichelli.it" text="Profilo" underlined=""></z-list-item>
                        <z-list-item link="#home" text="Esci"></z-list-item>
                      </ul>
                    </mock:shadow-root>
                  </z-list>
                </span>
              </span>
            </div>
            <hr />
            <div id="link-int" class="link-int">
              <span>
                <a href="#home" id="home" class="menu-item">
                  <span>Home</span>
                  <i></i>
                </a>
                <svg height="8" width="16"><polygon points="8,0 16,8 0,8" class="arrow"></polygon></svg>
                <span class="mobile-dropdown" id="mobile-dropdown-home">
                  <z-list>
                    <mock:shadow-root>
                      <ul>
                        <z-list-item link="#libreria" text="la mia libreria" listitemid="libreria"></z-list-item>
                      </ul>
                    </mock:shadow-root>
                  </z-list>
                </span>
              </span>
              <span>
                <a id="Dizionari" class="menu-item" href="https://www.zanichelli.it/dizionari/in-primo-piano">
                  <span>Dizionari</span>
                </a>
                <svg height="8" width="16" class="hidden"><polygon points="8,0 16,8 0,8" class="arrow"></polygon></svg>
              </span>
            </div>
            <hr />
            <div id="link-ext" class="link-ext">
              <span class="link-ext-span myz">
                <z-link id="supporto" url="https://www.zanichelli.it/contatti-e-recapiti" label="Supporto" icon="question-mark.png" iswhite target="_blank" />
              </span>
            </div>
          </div>
        </header>
      </mock:shadow-root>
    </z-header>
  `);
  });

  it("Test click ZHeader mobile toggle", async () => {
    const page = await newSpecPage({
      components: [ZHeader],
      html: initHeader(true, true, true, true, true)
    });

    expect(page.rootInstance.isMobile).toEqual(false);
    page.rootInstance.isMobile = true;
    await page.waitForChanges();
    expect(page.rootInstance.isMobile).toEqual(true);

    const menu = page.root.shadowRoot
      .querySelector("header")
      .querySelector("div#mobile-header")
      .querySelector("div#mobile-menu-wrapper")
      .querySelector("div#mobile-menu");
    expect(page.rootInstance.isMenuMobileOpen).toEqual(false);
    menu.click();
    await page.waitForChanges();
    expect(page.rootInstance.isMenuMobileOpen).toEqual(true);
    menu.click();
    await page.waitForChanges();
    expect(page.rootInstance.isMenuMobileOpen).toEqual(false);
  });

  /*
  TEST MOBILE END
  */

  /*
  TEST DESKTOP
  */

  it("Test render ZHeader myz vuoto", async () => {
    const page = await newSpecPage({
      components: [ZHeader],
      html: initHeader(false, false, true, false, false)
    });
    expect(page.root).toEqualHtml(`

      <z-header extlinkdata='[]' imagealt="logo zanichelli" intlinkdata='[]' ismyz="true" logolink="https://www.zanichelli.it" logopath="./assets/images/png/zanichelli-logo-2.png">
      <mock:shadow-root>
        <header>
          <div class="top-header">
            <div class="editors">
              <slot name="editors"></slot>
            </div>
          </div>
          <div class="main-header false" id="main-header">
            <div class="logo">
              <z-logo imagealt="logo zanichelli" imageurl="./assets/images/png/zanichelli-logo-2.png" link="https://www.zanichelli.it" targetblank></z-logo>
            </div>
            <div></div>
            <div></div>
            <div class="login">
              <z-button buttonid="login-button" label="entra" type="secondary"></z-button>
            </div>
          </div>
          <div class="dropdown-menu hidden" id="dropdown-menu"></div>
        </header>
      </mock:shadow-root>
    </z-header>
  `);
  });

  it("Test render ZHeader myz loggato", async () => {
    const page = await newSpecPage({
      components: [ZHeader],
      html: initHeader(true, true, true, true, true)
    });
    expect(page.root).toEqualHtml(`
    <z-header
      intlinkdata='[{"id":"home","label":"Home","link":"#home","subMenu":[{"id":"libreria","label":"la mia libreria","link":"#libreria"}]},{"id":"Dizionari","label":"Dizionari","link":"https://www.zanichelli.it/dizionari/in-primo-piano"}]'
      extlinkdata='[{"id":"supporto","label":"Supporto","link":"https://www.zanichelli.it/contatti-e-recapiti","icon":"question-mark.png"}]'
      imagealt="logo zanichelli"
      userdata='{"islogged":true,"id":123456,"name":"Dario Docente e Professore","usergroup":15,"userlinks":[{"label":"Profilo","link":"http://www.zanichelli.it"},{"label":"Esci","link":"#home"}]}'
      ismyz="true"
      logolink="https://www.zanichelli.it"
      logopath="./assets/images/png/zanichelli-logo-2.png"
    >
      <mock:shadow-root>
        <header>
          <div class="top-header">
            <div class="editors">
              <slot name="editors" />
            </div>
          </div>
          <div id="main-header" class="main-header false">
            <div class="logo">
              <z-logo
                link="https://www.zanichelli.it"
                targetblank
                imageurl="./assets/images/png/zanichelli-logo-2.png"
                imagealt="logo zanichelli"
              />
            </div>
            <div id="link-int" class="link-int">
              <span>
                <a href="#home" id="home" class="menu-item">
                  <span>Home</span>
                  <i></i>
                </a>
                <svg height="8" width="16"><polygon points="8,0 16,8 0,8" class="arrow"></polygon></svg>
              </span>
              <span>
                <a id="Dizionari" class="menu-item" href="https://www.zanichelli.it/dizionari/in-primo-piano">
                  <span>Dizionari</span>
                </a>
                <svg height="8" width="16" class="hidden"><polygon points="8,0 16,8 0,8" class="arrow"></polygon></svg>
              </span>
            </div>
            <div id="link-ext" class="link-ext">
              <span class="link-ext-span myz">
                <z-link id="supporto" url="https://www.zanichelli.it/contatti-e-recapiti" label="Supporto" icon="question-mark.png" iswhite target="_blank" />
              </span>
            </div>
            <div class="login">
              <z-menu-dropdown
                nomeutente="Dario Docente e Professore"
                menucontent='[{"label":"Profilo","link":"http://www.zanichelli.it"},{"label":"Esci","link":"#home"}]'
              ></z-menu-dropdown>
            </div>
          </div>
          <div id="dropdown-menu" class="dropdown-menu">
            <ul class="dropdown-links">
              <li><a class="active" href="#libreria">
                la mia libreria
              </a>
              </li>
            </ul>
          </div>
        </header>
      </mock:shadow-root>
    </z-header>
  `);
  });

  it("Test render ZHeader myz non loggato", async () => {
    const page = await newSpecPage({
      components: [ZHeader],
      html: initHeader(false, false, true, true, true)
    });
    expect(page.root).toEqualHtml(`
    <z-header
      intlinkdata='[{"id":"home","label":"Home","link":"#home","subMenu":[{"id":"libreria","label":"la mia libreria","link":"#libreria"}]},{"id":"Dizionari","label":"Dizionari","link":"https://www.zanichelli.it/dizionari/in-primo-piano"}]'
      extlinkdata='[{"id":"supporto","label":"Supporto","link":"https://www.zanichelli.it/contatti-e-recapiti","icon":"question-mark.png"}]'
      imagealt="logo zanichelli"
      ismyz="true"
      logolink="https://www.zanichelli.it"
      logopath="./assets/images/png/zanichelli-logo-2.png"
    >
      <mock:shadow-root>
        <header>
          <div class="top-header">
            <div class="editors">
              <slot name="editors" />
            </div>
          </div>
          <div id="main-header" class="main-header false">
            <div class="logo">
              <z-logo
                link="https://www.zanichelli.it"
                targetblank
                imageurl="./assets/images/png/zanichelli-logo-2.png"
                imagealt="logo zanichelli"
              />
            </div>
            <div></div>
            <div></div>
            <div class="login">
              <z-button label="entra" type="secondary" buttonid="login-button"></z-button>
            </div>
          </div>
          <div id="dropdown-menu" class="dropdown-menu hidden"></div>
        </header>
      </mock:shadow-root>
    </z-header>
  `);
  });

  it("Test render ZHeader non myz loggato", async () => {
    const page = await newSpecPage({
      components: [ZHeader],
      html: initHeader(true, true, false, true, true)
    });
    expect(page.root).toEqualHtml(`
    <z-header
      intlinkdata='[{"id":"home","label":"Home","link":"#home","subMenu":[{"id":"libreria","label":"la mia libreria","link":"#libreria"}]},{"id":"Dizionari","label":"Dizionari","link":"https://www.zanichelli.it/dizionari/in-primo-piano"}]'
      extlinkdata='[{"id":"supporto","label":"Supporto","link":"https://www.zanichelli.it/contatti-e-recapiti","icon":"question-mark.png"}]'
      imagealt="logo zanichelli"
      userdata='{"islogged":true,"id":123456,"name":"Dario Docente e Professore","usergroup":15,"userlinks":[{"label":"Profilo","link":"http://www.zanichelli.it"},{"label":"Esci","link":"#home"}]}'
      ismyz="false"
      logolink="https://www.zanichelli.it"
      logopath="./assets/images/png/zanichelli-logo-2.png"
    >
      <mock:shadow-root>
        <header>
          <div></div>
          <div id="main-header" class="main-header myz-out">
            <div class="logo">
              <z-logo
                link="https://www.zanichelli.it"
                targetblank
                imageurl="./assets/images/png/zanichelli-logo-2.png"
                imagealt="logo zanichelli"
              />
            </div>
            <div></div>
            <div id="link-ext" class="link-ext">
              <span class="link-ext-span false">
                <z-link id="supporto" url="https://www.zanichelli.it/contatti-e-recapiti" label="Supporto" icon="question-mark.png" target="_blank" />
              </span>
            </div>
            <div class="login">
              <z-menu-dropdown
                nomeutente="Dario Docente e Professore"
                menucontent='[{"label":"Profilo","link":"http://www.zanichelli.it"},{"label":"Esci","link":"#home"}]'
              ></z-menu-dropdown>
            </div>
          </div>
          <div id="dropdown-menu" class="dropdown-menu hidden"></div>
        </header>
      </mock:shadow-root>
    </z-header>
  `);
  });

  it("Test render ZHeader active menu item", async () => {
    const page = await newSpecPage({
      components: [ZHeader],
      html: initHeader(true, true, true, true, true)
    });
    page.rootInstance.activeMenuItem = {
      id: "Dizionari",
      label: "Dizionari",
      url: "https://www.zanichelli.it/dizionari/in-primo-piano"
    };
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
    <z-header
      intlinkdata='[{"id":"home","label":"Home","link":"#home","subMenu":[{"id":"libreria","label":"la mia libreria","link":"#libreria"}]},{"id":"Dizionari","label":"Dizionari","link":"https://www.zanichelli.it/dizionari/in-primo-piano"}]'
      extlinkdata='[{"id":"supporto","label":"Supporto","link":"https://www.zanichelli.it/contatti-e-recapiti","icon":"question-mark.png"}]'
      imagealt="logo zanichelli"
      userdata='{"islogged":true,"id":123456,"name":"Dario Docente e Professore","usergroup":15,"userlinks":[{"label":"Profilo","link":"http://www.zanichelli.it"},{"label":"Esci","link":"#home"}]}'
      ismyz="true"
      logolink="https://www.zanichelli.it"
      logopath="./assets/images/png/zanichelli-logo-2.png"
    >
      <mock:shadow-root>
        <header>
          <div class="top-header">
            <div class="editors">
              <slot name="editors" />
            </div>
          </div>
          <div id="main-header" class="main-header false">
            <div class="logo">
              <z-logo
                link="https://www.zanichelli.it"
                targetblank
                imageurl="./assets/images/png/zanichelli-logo-2.png"
                imagealt="logo zanichelli"
              />
            </div>
            <div id="link-int" class="link-int">
              <span>
                <a href="#home" id="home" class="menu-item">
                  <span>Home</span>
                  <i></i>
                </a>
                <svg height="8" width="16" class="hidden"><polygon points="8,0 16,8 0,8" class="arrow"></polygon></svg>
              </span>
              <span>
                <a id="Dizionari" class="menu-item" href="https://www.zanichelli.it/dizionari/in-primo-piano">
                  <span>Dizionari</span>
                </a>
                <svg height="8" width="16"><polygon points="8,0 16,8 0,8" class="arrow"></polygon></svg>
              </span>
            </div>
            <div id="link-ext" class="link-ext">
              <span class="link-ext-span myz">
                <z-link id="supporto" url="https://www.zanichelli.it/contatti-e-recapiti" label="Supporto" icon="question-mark.png" iswhite target="_blank" />
              </span>
            </div>
            <div class="login">
              <z-menu-dropdown
                nomeutente="Dario Docente e Professore"
                menucontent='[{"label":"Profilo","link":"http://www.zanichelli.it"},{"label":"Esci","link":"#home"}]'
              ></z-menu-dropdown>
            </div>
          </div>
          <div id="dropdown-menu" class="dropdown-menu hidden"></div>
        </header>
      </mock:shadow-root>
    </z-header>
  `);
  });

  /*
  TEST DESKTOP END
  */
});

//Init header
function initHeader(
  userPresent: boolean,
  userLogged: boolean,
  myz: boolean,
  intlinkdataBool: boolean,
  extlinkdataBool: boolean
) {
  const userNotLogged = { islogged: false, usergroup: 4 };
  const user = {
    islogged: true,
    id: 123456,
    name: "Dario Docente e Professore",
    usergroup: 15,
    userlinks: [
      { label: "Profilo", link: "http://www.zanichelli.it" },
      { label: "Esci", link: "#home" }
    ]
  };
  const emptyArray = "[]";
  let userTag = "";
  if (userPresent) {
    userTag = userLogged
      ? "userdata='" + JSON.stringify(user) + "'"
      : "userdata='" + JSON.stringify(userNotLogged) + "'";
  }
  const intlinkdata = JSON.stringify([
    {
      id: "home",
      label: "Home",
      link: "#home",
      subMenu: [
        {
          id: "libreria",
          label: "la mia libreria",
          link: "#libreria"
        }
      ]
    },
    {
      id: "Dizionari",
      label: "Dizionari",
      link: "https://www.zanichelli.it/dizionari/in-primo-piano"
    }
  ]);
  const extlinkdata = JSON.stringify([
    {
      id: "supporto",
      label: "Supporto",
      link: "https://www.zanichelli.it/contatti-e-recapiti",
      icon: "question-mark.png"
    }
  ]);

  const logoPath = "./assets/images/png/zanichelli-logo-2.png";
  const logoLink = "https://www.zanichelli.it";

  return `<z-header intlinkdata='${intlinkdataBool ? intlinkdata : emptyArray}'
  extlinkdata='${extlinkdataBool ? extlinkdata : emptyArray}'
  ${userTag}
  ismyz=${myz}
  logopath=${logoPath}
  logolink=${logoLink}
  imagealt="logo zanichelli"
  ></z-header>`;
}
