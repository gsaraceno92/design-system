import { Component, Prop, h, State } from "@stencil/core";
import { MenuItem } from "../../beans/index";

import { handleKeyboardSubmit } from "../../utils/utils";

@Component({
  tag: "z-menu-dropdown",
  styleUrl: "styles.css",
  shadow: true
})
export class ZMenuDropdown {
  /** user name text */
  @Prop() nomeutente: string;
  /** Json stringified or array to fill menu dropdown */
  @Prop() menucontent: string | MenuItem[];
  /** unique button id */
  @Prop() buttonid: string;

  @State() ismenuopen: boolean = false;

  linkarray: MenuItem[];

  componentWillRender() {
    this.linkarray =
      typeof this.menucontent === "string"
        ? JSON.parse(this.menucontent)
        : this.menucontent;
  }

  renderMenuOpen() {
    if (this.ismenuopen) {
      return (
        <ul>
          {this.linkarray.map(bean => (
            <li>
              <z-link
                linkid={bean.id}
                url={bean.link}
                label={bean.label}
                icon={bean.icon}
              />
            </li>
          ))}
        </ul>
      );
    }
  }

  renderButtonMenu() {
    return (
      <span class="arrow">
        <z-icon name="drop-down" width={14} height={14} />
      </span>
    );
  }

  retriveMenuClass() {
    if (this.ismenuopen) {
      return "menu-opened";
    }
  }

  render() {
    return (
      <a class={this.retriveMenuClass()} role="button">
        <div
          class="container"
          onKeyDown={(ev: KeyboardEvent) =>
            handleKeyboardSubmit(ev, () => {
              this.ismenuopen = !this.ismenuopen;
            })
          }
          onClick={() => (this.ismenuopen = !this.ismenuopen)}
          tabindex="0"
        >
          <z-icon name="user" width={14} height={14} />
          <span class="user">{this.nomeutente}</span>
          {this.renderButtonMenu()}
        </div>
        {this.renderMenuOpen()}
      </a>
    );
  }
}
