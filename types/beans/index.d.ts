export declare type FooterBean = {
    zanichelliLinks: FooterGroupBean[];
    myzLink: MyzLinkBean;
    zanichelliAddress: string;
    social: FooterSocialBean[];
    certification: string;
    bottomLinks: FooterGroupItemBean[];
};
export declare type FooterGroupItemBean = {
    label: string;
    link: string;
    target?: string;
};
export declare type FooterGroupBean = {
    title: string;
    items: FooterGroupItemBean[];
};
export declare type MyzLinkBean = {
    label: string;
    img: string;
    link: string;
};
export declare type FooterSocialBean = {
    icon: string;
    link: string;
    description?: string;
};
export declare enum LicenseTypeEnum {
    real = "reale",
    virtual = "virtuale",
    essay = "saggio"
}
export declare type LicenseType = LicenseTypeEnum;
export declare type CardBean = {
    id: string;
    isbn: string;
    volume_title: string;
    opera_title: string;
    img: string;
    authors: string;
    actions: ActionBean[];
    is_bookmark: boolean;
    licenseType: LicenseTypeEnum;
};
export declare type ActionBean = {
    isLink: boolean;
    value: string;
    url?: string;
};
export declare type ListItemBean = {
    text: string;
    link?: string;
    linktarget?: string;
    icon?: string;
    listitemid?: string;
};
export declare type FilterItem = {
    name: string;
    id: string;
    isActive: boolean;
    isfixed: boolean;
};
export declare type MenuItem = {
    id: string;
    label: string;
    link?: string;
    icon?: string;
    subMenu?: MenuItem[];
};
export declare type HeaderUserData = {
    islogged: boolean;
    id?: number;
    name?: string;
    usergroup: number;
    userlinks: MenuItem[];
};
export declare type ComboItemBean = {
    id: string;
    name: string;
    checked: boolean;
};
export declare type ButtonVariantBean = ButtonVariantEnum;
export declare enum ButtonVariantEnum {
    primary = "primary",
    secondary = "secondary",
    tertiary = "tertiary"
}
export declare enum ButtonTypeEnum {
    submit = "submit",
    reset = "reset",
    button = "button"
}
export declare type InputTypeBean = InputTypeEnum;
export declare enum InputTypeEnum {
    text = "text",
    password = "password",
    number = "number",
    email = "email",
    textarea = "textarea",
    checkbox = "checkbox",
    select = "select"
}
export declare type InputStatusBean = InputStatusEnum;
export declare enum InputStatusEnum {
    success = "success",
    error = "error",
    warning = "warning"
}
export declare type TooltipPositionBean = TooltipPosition;
export declare enum TooltipPosition {
    TOP = "TOP",
    BOTTOM = "BOTTOM",
    LEFT = "LEFT",
    RIGHT = "RIGHT",
    NO_ARROW = "NO_ARROW"
}
export declare enum keybordKeyCodeEnum {
    TAB = 9,
    SPACE = 32,
    ESC = 27,
    ENTER = 13,
    ARROW_UP = 38,
    ARROW_DOWN = 40
}
export declare type SelectItemBean = {
    id: string;
    name: string;
    selected: boolean;
    disabled?: boolean;
};