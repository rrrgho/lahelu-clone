export interface ILikeUnlikeButton {
	initialLikes: number;
	onLike?: () => void;
	onUnlike?: () => void;
}
