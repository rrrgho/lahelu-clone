export interface IApiResponseBase {
	data: any[];
	message: string;
}

export interface IApiResponse {
	error: IApiResponseBase;
}
