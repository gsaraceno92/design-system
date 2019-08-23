export type FooterBean = {
  zanichelliLinks: FooterGroupBean[];
  myzLink: MyzLinkBean;
  zanichelliAddress: string;
  social: FooterSocialBean[];
  certification: string;
  bottomLinks: FooterGroupItemBean[];
};

export type FooterGroupItemBean = {
  label: string;
  link: string;
  target?: string;
};

export type FooterGroupBean = {
  title: string;
  items: FooterGroupItemBean[];
};

export type MyzLinkBean = {
  label: string;
  img: string;
  link: string;
};

export type FooterSocialBean = {
  icon: string;
  link: string;
};

export declare type ActionBean = {
  isLink: boolean;
  value: string;
  url?: string;
};

export type CardBean = {
  id: string;
  titolo: string;
  img: string;
  autori: string;
  anno: number;
  actions: ActionBean[];
};
export type ListItemBean = {
  text: string;
  link?: string;
  icon?: string;
  listitemid?: string;
};

export type MenuDropdownItem = {
  text: string;
  link: string;
  linkid?: string;
};

export type FilterItem = {
  name: string;
  id: string;
  isActive: boolean;
  isfixed: boolean;
};

export type HeaderLink = {
  id: string;
  name: string;
  subMenu?: HeaderLink[];
  url?: string;
  icon?: string;
};

export type HeaderUserData = {
  islogged: boolean;
  id?: number;
  name?: string;
  usergroup: number;
  userlinks: MenuDropdownItem[];
};
 export type ComboItemBean = {
  id: string;
  name: string;
  checked: boolean;
};

export type InputTypeBean = InputTypeEnum;

export enum InputTypeEnum {
	text = 'text',
	search = 'search',
  password = 'password',
  number = 'number',
  email = 'email'
}
