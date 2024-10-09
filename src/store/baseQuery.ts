import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { apiErrorOccurred } from './error/apiErrorSlice';
import { IApiResponse } from '@/global.type';

const baseQuery = fetchBaseQuery({
	baseUrl: process.env.EXPO_PUBLIC_API_URL,
	prepareHeaders: (headers, { getState }) => {
		return headers;
	},
});

export const baseQueryWithErrorHandler = async (
	args: any,
	api: any,
	extraOptions: any,
) => {
	const result: IApiResponse | any = await baseQuery(args, api, extraOptions);
	if (result.error) {
		api.dispatch(apiErrorOccurred('An error occurred, Server Error'));
	}
	return result;
};
