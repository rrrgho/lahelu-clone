import { IPostOptionBase } from '@/components/moleculs/PostOptions/type';
import { id } from './locales/id';

export const postOptions: IPostOptionBase[] = [
	{
		text: id.saveAlbum,
		icon: 'book',
		onPress: () => {},
	},
	{
		text: id.download,
		icon: 'download',
		onPress: () => {},
	},
	{
		text: id.notlike,
		icon: 'frown',
		onPress: () => {},
	},
	{
		text: id.report,
		icon: 'flag',
		onPress: () => {},
	},
];
