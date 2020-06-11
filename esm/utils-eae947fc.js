var LicenseTypeEnum;
(function (LicenseTypeEnum) {
    LicenseTypeEnum["real"] = "reale";
    LicenseTypeEnum["virtual"] = "virtuale";
    LicenseTypeEnum["essay"] = "saggio";
})(LicenseTypeEnum || (LicenseTypeEnum = {}));
var ButtonVariantEnum;
(function (ButtonVariantEnum) {
    ButtonVariantEnum["primary"] = "primary";
    ButtonVariantEnum["secondary"] = "secondary";
    ButtonVariantEnum["tertiary"] = "tertiary";
})(ButtonVariantEnum || (ButtonVariantEnum = {}));
var ButtonTypeEnum;
(function (ButtonTypeEnum) {
    ButtonTypeEnum["submit"] = "submit";
    ButtonTypeEnum["reset"] = "reset";
    ButtonTypeEnum["button"] = "button";
})(ButtonTypeEnum || (ButtonTypeEnum = {}));
var InputTypeEnum;
(function (InputTypeEnum) {
    InputTypeEnum["text"] = "text";
    InputTypeEnum["password"] = "password";
    InputTypeEnum["number"] = "number";
    InputTypeEnum["email"] = "email";
    InputTypeEnum["textarea"] = "textarea";
    InputTypeEnum["checkbox"] = "checkbox";
    InputTypeEnum["select"] = "select";
})(InputTypeEnum || (InputTypeEnum = {}));
var InputStatusEnum;
(function (InputStatusEnum) {
    InputStatusEnum["success"] = "success";
    InputStatusEnum["error"] = "error";
    InputStatusEnum["warning"] = "warning";
})(InputStatusEnum || (InputStatusEnum = {}));
var TooltipPosition;
(function (TooltipPosition) {
    TooltipPosition["TOP"] = "TOP";
    TooltipPosition["BOTTOM"] = "BOTTOM";
    TooltipPosition["LEFT"] = "LEFT";
    TooltipPosition["RIGHT"] = "RIGHT";
    TooltipPosition["NO_ARROW"] = "NO_ARROW";
})(TooltipPosition || (TooltipPosition = {}));
var keybordKeyCodeEnum;
(function (keybordKeyCodeEnum) {
    keybordKeyCodeEnum[keybordKeyCodeEnum["TAB"] = 9] = "TAB";
    keybordKeyCodeEnum[keybordKeyCodeEnum["SPACE"] = 32] = "SPACE";
    keybordKeyCodeEnum[keybordKeyCodeEnum["ESC"] = 27] = "ESC";
    keybordKeyCodeEnum[keybordKeyCodeEnum["ENTER"] = 13] = "ENTER";
    keybordKeyCodeEnum[keybordKeyCodeEnum["ARROW_UP"] = 38] = "ARROW_UP";
    keybordKeyCodeEnum[keybordKeyCodeEnum["ARROW_DOWN"] = 40] = "ARROW_DOWN";
})(keybordKeyCodeEnum || (keybordKeyCodeEnum = {}));

function randomId() {
    return Math.random()
        .toString(36)
        .replace("0.", "");
}
function handleKeyboardSubmit(ev, callback, ...args) {
    if (ev.keyCode === keybordKeyCodeEnum.ENTER ||
        ev.keyCode === keybordKeyCodeEnum.SPACE) {
        ev.preventDefault();
        callback(...args);
    }
}
function getClickedElement(elem = null) {
    if (!elem)
        elem = document.activeElement;
    if (elem && elem.shadowRoot && elem.shadowRoot.activeElement) {
        elem = elem.shadowRoot.activeElement;
        return getClickedElement(elem);
    }
    return elem;
}
function getElementTree(elem, tree = []) {
    tree.push(elem);
    if (elem.parentElement) {
        elem = elem.parentElement;
        return getElementTree(elem, tree);
        // @ts-ignore
    }
    else if (elem.parentNode && elem.parentNode.host) {
        // @ts-ignore
        elem = elem.parentNode.host;
        return getElementTree(elem, tree);
    }
    return tree;
}

export { ButtonTypeEnum as B, InputTypeEnum as I, LicenseTypeEnum as L, TooltipPosition as T, ButtonVariantEnum as a, getClickedElement as b, getElementTree as g, handleKeyboardSubmit as h, keybordKeyCodeEnum as k, randomId as r };