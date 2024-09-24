import { ICollapsibleListsItem } from '@/components/moleculs/CollapsibleLists/type';
import { ISidebarMenuItem } from '@/components/moleculs/SidebarMenuList/type';
import { id } from '@/constants/locales/id';

export const useSidebarHandler = () => {
	const menuItems: ISidebarMenuItem[] = [
		{
			icon: 'home',
			label: id.home,
			onPress: () => {},
		},
		{
			icon: 'clock-o',
			label: id.fresh,
			onPress: () => {},
		},
		{
			icon: 'stumbleupon',
			label: id.trending,
			onPress: () => {},
		},
		{
			icon: 'users',
			label: id.topic,
			onPress: () => {},
		},
	];

	const otherMemeOptions: ICollapsibleListsItem[] = [
		{
			icon: 'trophy',
			label: 'Peringkat',
			onPress: () => {},
		},
		{
			icon: 'bookmark',
			label: 'Tersimpan',
			onPress: () => {},
		},
		{
			icon: 'random',
			label: 'Acak',
			onPress: () => {},
		},
	];

	const exploreOptions: ICollapsibleListsItem[] = [
		{
			icon: 'hand-o-right',
			label: 'Donatur',
			onPress: () => {},
		},
		{
			icon: 'trophy',
			label: 'Medali',
			onPress: () => {},
		},
		{
			icon: 'lemon-o',
			label: 'Toko koin',
			onPress: () => {},
		},
		{
			icon: 'gift',
			label: 'Discord',
			onPress: () => {},
		},
	];

	return { menuItems, otherMemeOptions, exploreOptions };
};
