import { LicenseTypeEnum } from "../../../beans/index";
/**
 * @slot icon - card header icon slot
 */
export declare class ZCardHeader {
    /** volume title */
    titolo: string;
    /** faded status */
    faded: boolean;
    /** card graphic variant (optional) */
    cardtype?: LicenseTypeEnum;
    retrieveClass(): string;
    render(): any;
}