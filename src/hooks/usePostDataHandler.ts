import { useFetchPostsQuery } from '@/store/posts/postApi';
import { useDispatch, useSelector } from 'react-redux';
import { useScrollHandler } from '@/hooks/useScrollHandler';
import { RootState } from '@/store';
import { resetPosts } from '@/store/posts/postSlice';

export const usePostDataHandler = () => {
	const { isLoading, isFetching, refetch } = useFetchPostsQuery();
	const { onScrollY, scrollOffsetY } = useScrollHandler();
	const posts = useSelector((state: RootState) => state.posts.posts);
	const dispatch = useDispatch();

	const handleRefresh = () => {
		dispatch(resetPosts());
		refetch();
	};

	const handleReload = () => {
		refetch();
	};

	return {
		onScrollY,
		scrollOffsetY,

		isLoading,
		isFetching,
		refetch,
		posts,

		handleRefresh,
		handleReload,
	};
};
