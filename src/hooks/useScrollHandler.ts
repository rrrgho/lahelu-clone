import { useRef } from 'react';
import { Animated } from 'react-native';

export const useScrollHandler = () => {
	const scrollOffsetY = useRef(new Animated.Value(0)).current;
	const onScrollY = Animated.event(
		[{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
		{
			useNativeDriver: false,
		},
	);

	return {
		onScrollY,
		scrollOffsetY,
	};
};
