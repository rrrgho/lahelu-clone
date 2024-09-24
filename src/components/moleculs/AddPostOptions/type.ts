import { IPostOptionBase } from '../PostOptions/type';

export interface IAddPostOption {
	postOptionVisible: boolean;
	onClose: () => void;
	options: IPostOptionBase[];
}
