export interface IBottomSheet {
	isVisible: boolean;
	onClose: () => void;
	title?: string;
	children: React.ReactNode;
}
