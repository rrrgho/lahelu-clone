import { useState } from 'react';

export const usePostCardHandle = () => {
	const [optionSheet, setOptionSheet] = useState<boolean>(false);
	const [commentSectionVisible, setCommentSectionVisible] =
		useState<boolean>(false);

	/**
	 * Options to show in Option
	 * bottom sheet.
	 */

	const showPostOption = () => {
		setOptionSheet(true);
	};

	const hidePostOption = () => {
		setOptionSheet(false);
	};

	/**
	 * Handle Comment Post
	 * Open comment section and send post data to
	 * comment section to allow comment section fetching
	 * comment api
	 */

	const showCommentSection = () => {
		setCommentSectionVisible(true);
	};

	const hideCommentSection = () => {
		setCommentSectionVisible(false);
	};

	return {
		optionSheet,
		showPostOption,
		hidePostOption,

		showCommentSection,
		hideCommentSection,
		commentSectionVisible,
	};
};
