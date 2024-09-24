import { IPostOptionBase } from '@/components/moleculs/PostOptions/type';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { generateNewPost } from '@/store/posts/postSlice';
import { router, useSegments } from 'expo-router';

export const usePostAddHandler = () => {
	const [addPostOptionVisible, setPostOptionVisible] = useState<boolean>(false);
	const dispatch = useDispatch();

	const segment = useSegments();

	const generatePost = () => {
		if (segment[1] !== '(home)') router.replace('/(home)');
		dispatch(generateNewPost());
	};

	/**
	 * Options to show in Option
	 * bottom sheet.
	 */

	const addPostOption: IPostOptionBase[] = [
		{
			text: 'Buat Meme',
			icon: 'book',
			onPress: generatePost,
		},
		{
			text: 'Buat Topik',
			icon: 'addusergroup',
			onPress: generatePost,
		},
		{
			text: 'Meme Generator',
			icon: 'edit',
			onPress: generatePost,
		},
	];

	const showPostAddOption = () => {
		setPostOptionVisible(true);
	};

	const hidePostAddOption = () => {
		setPostOptionVisible(false);
	};

	return {
		addPostOption,
		addPostOptionVisible,
		showPostAddOption,
		hidePostAddOption,
	};
};
