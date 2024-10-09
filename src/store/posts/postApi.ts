import { IPost } from '@/constants/type';
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithErrorHandler } from '../baseQuery';

export const postsApi = createApi({
	reducerPath: 'postsApi',
	baseQuery: baseQueryWithErrorHandler,
	endpoints: (builder) => ({
		fetchPosts: builder.query<IPost[], void>({
			query: () => '/posts',
		}),
	}),
});

export const { useFetchPostsQuery } = postsApi;
