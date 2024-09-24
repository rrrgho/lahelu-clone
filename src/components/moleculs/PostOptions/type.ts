export interface IPostOptionBase {
	text: string;
	icon?: string | any;
	onPress: () => void;
}

export interface IPostOption {
	options: IPostOptionBase[];
}
