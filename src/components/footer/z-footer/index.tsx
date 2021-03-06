import { Component, Prop, State, h } from "@stencil/core";
import { mobileBreakpoint } from "../../../constants/breakpoints";
import {
  FooterBean,
  FooterGroupBean,
  FooterGroupItemBean,
  MyzLinkBean,
  FooterSocialBean
} from "../../../beans/index.js";

@Component({
  tag: "z-footer",
  styleUrls: ["styles.css"],
  shadow: true
})
export class ZFooter {
  /** JSON stringified data to fill the footer */
  @Prop() data: string;
  /** set copyright user (optional)  */
  @Prop() copyrightuser?;
  @State() isOpen: boolean[] = [];
  @State() isMobile: boolean;

  jsonData: FooterBean;

  componentWillLoad() {
    this.jsonData = JSON.parse(this.data);
    this.isOpen = Array<boolean>(this.jsonData.zanichelliLinks.length).fill(
      false
    );
  }

  componentDidLoad() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.isMobile = window.innerWidth <= mobileBreakpoint;
  }

  handleOnHeaderClick(id: number): void {
    // stencil non si accorge delle modifiche su isOpen quindi copio l'array prima
    var open = this.isOpen.slice(0);
    open[id] = !open[id];
    this.isOpen = [...open];
  }

  renderFooterSection(id: number, group: FooterGroupBean): HTMLElement {
    return (
      <nav>
        <div class="header">
          <h2>{group.title}</h2>
          {this.isMobile && (
            <button onClick={() => this.handleOnHeaderClick(id)}>
              <z-icon
                name={this.isOpen[id] ? "chevron-up" : "chevron-down"}
                width={16}
                height={16}
              />
            </button>
          )}
        </div>
        <div class="content">
          <ul class={this.isOpen[id] ? "show" : ""}>
            {group.items.map(
              (item: FooterGroupItemBean): HTMLElement => (
                <li>
                  <a
                    href={item.link}
                    target={item.target ? item.target : "_blank"}
                  >
                    {item.label}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
    );
  }

  renderFooterTop(): HTMLElement {
    const zanichelliLinks: FooterGroupBean[] = this.jsonData.zanichelliLinks;
    const bottomLinks: FooterGroupItemBean[] = this.jsonData.bottomLinks;
    const zanichelliLinksToRender = zanichelliLinks.slice();

    if (this.isMobile) {
      zanichelliLinksToRender.push({
        title: "Altre informazioni",
        items: bottomLinks
      });
    }

    return (
      <section class="top">
        {zanichelliLinksToRender.map(
          (item: FooterGroupBean, id: number): HTMLElement =>
            this.renderFooterSection(id, item)
        )}
      </section>
    );
  }

  renderZLogo(): HTMLElement {
    const myzLink: MyzLinkBean = this.jsonData.myzLink;

    return (
      <z-logo
        link={myzLink.link}
        width={144}
        height={38}
        imagealt={myzLink.label}
        targetblank={true}
      />
    );
  }

  renderAddress(): HTMLElement {
    const zanichelliAddress: string = this.jsonData.zanichelliAddress;

    return <p>{zanichelliAddress}</p>;
  }

  renderSocial(): HTMLElement {
    const social: FooterSocialBean[] = this.jsonData.social;

    return (
      <ul class="social">
        {social.map(
          (item: FooterSocialBean): HTMLElement => (
            <li>
              <a href={item.link} target="_blank">
                <img src={item.icon} alt={item.description} />
              </a>
            </li>
          )
        )}
      </ul>
    );
  }

  renderCopyright(): HTMLElement {
    if (!!this.copyrightuser) {
      return (
        <p>
          Copyright – 2018-{new Date().getFullYear()} {this.copyrightuser}
          <span> All rights reserved </span>
        </p>
      );
    } else return;
  }

  renderCertification(): HTMLElement {
    const certification: string = this.jsonData.certification;

    return <p>{certification}</p>;
  }

  renderBottomLinks(): HTMLElement {
    const bottomLinks: FooterGroupItemBean[] = this.jsonData.bottomLinks;
    if (!this.isMobile) {
      return (
        <div class="item bottom-links">
          <ul>
            {bottomLinks.map(
              (item: FooterGroupItemBean): HTMLElement => (
                <li>
                  <a
                    href={item.link}
                    target={item.target ? item.target : "_blank"}
                  >
                    {item.label}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      );
    }
  }

  renderFooterBottom(): HTMLElement {
    return (
      <section class="bottom">
        <div class="item logo">
          {this.renderZLogo()}
          {this.renderCopyright()}
          {this.renderCertification()}
        </div>
        <div class="item">
          {this.renderAddress()}
          {this.renderSocial()}
        </div>
        {this.renderBottomLinks()}
      </section>
    );
  }

  render() {
    if (this.jsonData) {
      return (
        <footer>
          {this.renderFooterTop()}
          {this.renderFooterBottom()}
        </footer>
      );
    }
  }
}
