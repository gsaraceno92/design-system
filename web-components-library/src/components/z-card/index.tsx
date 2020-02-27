import { Component, h, Prop } from "@stencil/core";
import { LicenseTypeEnum } from "../../beans/index";

/**
 * @slot  - generic card slot
 */
@Component({
  tag: "z-card",
  styleUrl: "styles.css",
  shadow: true
})
export class ZCardComponent {
  /** faded status */
  @Prop() faded: boolean;
  /** graphic variant (optional) */
  @Prop() cardtype?: LicenseTypeEnum;
  /** pressed status */
  @Prop() ispressed: boolean = false;
  /** highlighted status */
  @Prop() ishighlighted: boolean = false;

  retrieveClass() {
    let elemClasses = "";

    if (this.cardtype === LicenseTypeEnum.real) elemClasses += "real";

    if (this.faded) {
      elemClasses += " faded";
    } else if (this.ispressed) {
      elemClasses += " pressed";
    } else if (this.ishighlighted) {
      elemClasses += " highlighted";
    }

    return elemClasses;
  }

  render() {
    return (
      <div class={this.retrieveClass()} tabindex="0">
        <slot />
      </div>
    );
  }
}
