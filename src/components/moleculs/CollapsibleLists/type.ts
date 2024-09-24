export interface ICollapsibleListsItem {
	icon: string | any;
	label: string;
	onPress: () => void;
}

export interface ICollapsibleLists {
	title: string;
	items: ICollapsibleListsItem[];
}
