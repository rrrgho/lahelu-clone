export interface ISelectableMenuItem {
	id: string;
	icon: string | any;
	label: string;
	onPress: () => void;
}

export interface ISelectableMenuList {
	menuItems: ISelectableMenuItem[];
	title: string;
}
