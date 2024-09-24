export interface ISidebarMenuItem {
	icon?: string | any;
	label: string;
	onPress: () => void;
}

export interface ISidebarMenuList {
	menuItems: ISidebarMenuItem[];
}
