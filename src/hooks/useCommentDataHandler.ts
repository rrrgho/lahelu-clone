import { RootState } from '@/store';
import { useFetchCommentsQuery } from '@/store/comments/commentApi';
import { useState } from 'react';
import { useSelector } from 'react-redux';

interface IUseCommentDataHandler {
	post_id: string | any;
}

export const useCommentDataHandler = (props: IUseCommentDataHandler) => {
	const { post_id } = props;
	const { isLoading, isError, error, refetch, isFetching } =
		useFetchCommentsQuery(post_id);
	const [refreshing, setRefreshing] = useState(false);

	const onRefresh = () => {
		setRefreshing(true);
		refetch().finally(() => setRefreshing(false));
	};

	const comments = useSelector((state: RootState) => state.comments.comments);

	return {
		comments,
		isLoading,
		isError,
		error,
		refetch,
		onRefresh,
		refreshing,
		isFetching,
	};
};
