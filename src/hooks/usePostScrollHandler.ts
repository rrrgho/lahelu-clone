import { useRef, useState } from 'react';

export const usePostScrollHandler = () => {
	const [currentViewableItemIndex, setCurrentViewableItemIndex] = useState(0);
	const viewabilityConfig = { viewAreaCoveragePercentThreshold: 50 };
	const onViewableItemsChanged = ({ viewableItems }: any) => {
		if (viewableItems.length > 0) {
			setCurrentViewableItemIndex(viewableItems[0].index ?? 0);
		}
	};

	const viewabilityConfigCallbackPairs = useRef([
		{ viewabilityConfig, onViewableItemsChanged },
	]);

	return {
		viewabilityConfigCallbackPairs,
		currentViewableItemIndex,
	};
};
