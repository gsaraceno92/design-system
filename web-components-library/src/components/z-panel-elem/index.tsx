import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-panel-elem",
  styleUrl: "styles.css",
  shadow: true
})
export class ZPanelElem {
  @Prop() elemid?: string;
  @Prop() imgurl?: string;
  @Prop() imgalt?: string;
  @Prop() linkicon?: string;
  @Prop() linklabel: string;
  @Prop() url: string;
  @Prop() target?: string = "_blank";
  @Prop() isdisabled?: boolean = false;
  @Prop() descr_slot_name?: string;

  render() {
    return (
      <div class="panel-elem-container">
        <div class="panel-elem-icon">
          <a class="elem-icon" href={this.url} target={this.target}>
            <img src={this.imgurl} alt={this.imgalt} />
          </a>
        </div>
        <div class="panel-elem-link">
          <z-link
            url={this.url}
            label={this.linklabel}
            icon={this.linkicon}
            isdisabled={this.isdisabled}
            target={this.target}
            linkid={this.elemid + "link_id"}
          />
        </div>
        <div class="panel-elem-desc heading-01">
          <slot name={this.descr_slot_name} />
        </div>
      </div>
    );
  }
}
