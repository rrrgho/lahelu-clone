// Interface for the user object nested within each post
export interface IUser {
	id: string;
	name: string;
	email?: string;
	email_verified_at?: string;
	created_at?: string;
	updated_at?: string;
	deleted_at?: string | null;
}

// Interface for each individual post
export interface IPost {
	uid: string;
	id: string;
	user_id?: string;
	caption: string;
	image?: string;
	video?: string;
	like?: number;
	unlike?: number;
	is_sensitive?: boolean;
	is_onrule?: boolean;
	created_at?: string;
	updated_at?: string;
	deleted_at?: string | null;
	user?: IUser;
}

// Interface for each individual comment
export interface IComment {
	id: string;
	user_id: string;
	post_id: string;
	comment_id: string;
	comment: string;
	likes: number;
	created_at: string;
	updated_at: string;
	deleted_at: string;
	user: IUser;
}

// Main interface representing the entire API response
export interface IApiResponse {
	current_page: number;
	data: IPost[];
}
