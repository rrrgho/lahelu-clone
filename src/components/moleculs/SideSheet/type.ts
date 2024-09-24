export interface ISideSheet {
	isVisible: boolean;
	onClose: () => void;
	title: string;
	children: React.ReactNode;
}
