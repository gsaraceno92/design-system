import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'z-button-sort',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZButtonSort {
  /** id, should be unique */
  @Prop() buttonid: string;
  /** label content (ascending) */
  @Prop() label: string;
  /** label content (descending) */
  @Prop() desclabel?: string = this.label;
  /** occurrencies counter (optional) */
  @Prop() counter?: number;
  /** sort label content (ascending) (optional) */
  @Prop() sortlabelasc?: string = 'A-Z';
  /** sort label content (descending) (optional) */
  @Prop() sortlabeldesc?: string = 'Z-A';
  /** selected flag (optional) */
  @Prop({ mutable: true }) isselected?: boolean = false;
  /** sortable flag (optional) */
  @Prop({ mutable: true }) sortasc?: boolean = true;

  /** sorting direction click event, returns buttonid and sortAsc */
  @Event() buttonSortClick: EventEmitter;
  emitButtonSortClick() {
    if (!this.isselected) {
      this.isselected = true;
    } else {
      this.sortasc = !this.sortasc;
    }
    this.buttonSortClick.emit({ buttonid: this.buttonid, sortAsc: this.sortasc });
  }

  render() {
    return (
      <button id={this.buttonid} class={this.isselected && "selected"} onClick={() => this.emitButtonSortClick()}>
        <label>
          {this.sortasc ? this.label : this.desclabel}
          {this.counter && ` (${this.counter})`}</label>
        <span>{this.sortasc ? this.sortlabelasc : this.sortlabeldesc}</span>
        <z-icon name="caret-up-down" width={16} height={16} />
      </button>
    );
  }
}
