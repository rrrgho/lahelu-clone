export interface ISelectableMenuItem {
	icon: string | any;
	label: string;
	onPress: () => void;
}

export interface ISelectableMenuList {
	menuItems: ISelectableMenuItem[];
	title: string;
}
