import { IPost } from '@/constants/type';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
	reducerPath: 'postsApi',
	baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_API_URL }),
	endpoints: (builder) => ({
		fetchPosts: builder.query<IPost[], void>({
			query: () => '/posts',
		}),
	}),
});

export const { useFetchPostsQuery } = postsApi;
