import { Component, Prop, h } from "@stencil/core";
export class ZCardCover {
    hadleOnImageError() {
        this.img = this.defaultimg;
    }
    render() {
        return (h("img", { class: this.faded && "faded", onError: this.hadleOnImageError.bind(this), alt: this.titolo, src: this.img }));
    }
    static get is() { return "z-card-cover"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["styles.css"]
    }; }
    static get styleUrls() { return {
        "$": ["styles.css"]
    }; }
    static get properties() { return {
        "img": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "image source"
            },
            "attribute": "img",
            "reflect": false
        },
        "titolo": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "cover alt title"
            },
            "attribute": "titolo",
            "reflect": false
        },
        "faded": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "faded status"
            },
            "attribute": "faded",
            "reflect": false
        },
        "defaultimg": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "default error image source"
            },
            "attribute": "defaultimg",
            "reflect": false
        }
    }; }
}