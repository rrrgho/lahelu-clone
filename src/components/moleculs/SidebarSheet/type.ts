export interface ISidebarSheet {
	isVisible: boolean;
	onClose: () => void;
	title?: string;
	children: React.ReactNode;
}
