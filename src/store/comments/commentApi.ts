import { IComment } from '@/constants/type';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const commentApi = createApi({
	reducerPath: 'commentsApi',
	baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_API_URL }),
	endpoints: (builder) => ({
		fetchComments: builder.query<IComment[], string>({
			query: (post_id) => `/comments?post_id=${post_id}`,
		}),
	}),
});

export const { useFetchCommentsQuery } = commentApi;
