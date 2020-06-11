import { EventEmitter } from "../../../stencil-public-runtime";
export declare class ZLink {
    /** link id (optional) */
    htmlid?: string;
    /** link url (optional) */
    href?: string;
    /** link target (optional) */
    target?: string;
    /** tabindex link attribute (optional) */
    htmltabindex?: number;
    /** disable link flag (optional) */
    isdisabled?: boolean;
    /** active link flag (optional) */
    isactive?: boolean;
    /** white variant flag (optional) */
    iswhite?: boolean;
    /** link icon name (optional) */
    icon?: string;
    /** emitted on link click, returns linkId */
    zLinkClick: EventEmitter;
    constructor();
    emitZLinkClick(e: MouseEvent, linkId: any): void;
    emitZLinkInteraction(e: Event, linkId: string): void;
    render(): any;
}