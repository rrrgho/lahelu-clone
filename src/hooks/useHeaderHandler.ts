import { useState } from 'react';

export const useHeaderHandler = () => {
	const [isSideSheetVisible, setIsSideSheetVisible] = useState(false);
	const [isSidebarVisible, setIsSidebarVisible] = useState(false);

	const handleSearchPress = () => {
		setIsSideSheetVisible(true);
	};

	const handleCloseSideSheet = () => {
		setIsSideSheetVisible(false);
	};

	const handleOpenSidebar = () => {
		setIsSidebarVisible(true);
	};

	const handleCloseSidebar = () => {
		setIsSidebarVisible(false);
	};

	return {
		isSideSheetVisible,
		setIsSideSheetVisible,
		handleSearchPress,
		handleCloseSideSheet,

		isSidebarVisible,
		setIsSidebarVisible,
		handleOpenSidebar,
		handleCloseSidebar,
	};
};
