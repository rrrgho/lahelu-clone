import { useFetchPostsQuery } from '@/store/posts/postApi';
import { useDispatch, useSelector } from 'react-redux';
import { useScrollHandler } from '@/hooks/useScrollHandler';
import { RootState } from '@/store';
import { resetPosts } from '@/store/posts/postSlice';
import { useState } from 'react';

import { debounce } from 'lodash';

export const usePostDataHandler = () => {
	const { isLoading, isFetching, refetch } = useFetchPostsQuery();
	const [fakeFetching, setFakeFetching] = useState<boolean>(false);
	const { onScrollY, scrollOffsetY } = useScrollHandler();
	const posts = useSelector((state: RootState) => state.posts.posts);
	const dispatch = useDispatch();

	const handleRefresh = () => {
		dispatch(resetPosts());
		refetch();
	};

	const handleReload = () => {
		setFakeFetching(true);
		setTimeout(() => {
			if (!isFetching) {
				refetch();
			}
			setFakeFetching(false);
		}, 1000);
	};

	const debouncedHandleReload = debounce(handleReload, 1000);

	return {
		onScrollY,
		scrollOffsetY,

		isLoading,
		isFetching,
		fakeFetching,
		refetch,
		posts,

		handleRefresh,
		handleReload: debouncedHandleReload,
	};
};
