import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';
import { InputTypeBean, InputStatusBean } from "../../beans";


@Component({
  tag: 'z-input-text',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZInputText {
  @Prop() inputid: string;
  @Prop() label?: string;
  @Prop() value?: string;
  @Prop() placeholder?: string;
  @Prop() type?: InputTypeBean;
  @Prop() status?: InputStatusBean;
  @Prop() message?: string;
  @Prop() isdisabled: boolean = false;
  @Prop() isreadonly: boolean = false;

  private statusIcons = {
    success: 'circle-check',
    error: 'circle-cross-stroke',
    warning: 'circle-warning',
  };

  @Event() inputChange: EventEmitter;
  emitInputChange(value: string, keycode: number) {
    this.value = value;
    this.inputChange.emit({ value, keycode });
  }


  renderLabel() {
    if (!this.label) return;

    return <label>{this.label}</label>;
  }

  renderInput() {
    return <input
      id={this.inputid}
      type={this.type}
      disabled={this.isdisabled || this.isreadonly}
      class={`${this.isreadonly && 'readonly'} ${this.status && 'input_' + this.status}`}
      name={this.inputid}
      placeholder={this.placeholder}
      value={this.value}
      onInput={(e: any) => { this.emitInputChange(e.target.value, e.keyCode) }}
    />
  }

  renderResetIcon() {
    if (!this.value || this.isdisabled || this.isreadonly) return;

    return <z-icon name="close" onClick={(e: any) => this.emitInputChange('', e.keyCode)} />;
  }

  renderMessage() {
    if (!this.message) return;

    return (
      <span class={`statusMsg msg_${this.status}`}>
        {this.status ? <z-icon name={this.statusIcons[this.status]} width={14} height={14} /> : null}
        <span innerHTML={this.message}></span>
      </span>
    );
  }

  render() {
    return (
      <div>
        {this.renderLabel()}
        <div>
          {this.renderInput()}
          {this.renderResetIcon()}
        </div>
        {this.renderMessage()}
      </div>
    );
  }
}
