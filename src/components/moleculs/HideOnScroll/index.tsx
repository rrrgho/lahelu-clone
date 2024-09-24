import React, { FC } from 'react';
import { Animated } from 'react-native';
import { IHideOnScroll } from './type';

const HeaderMaxHeight = 120;
const HeaderMinHeight = 60;
const ScrollDistance = HeaderMaxHeight - HeaderMinHeight;

const HideOnScroll: FC<IHideOnScroll> = ({ value, children }) => {
	const animatedHeaderHeight = value.interpolate({
		inputRange: [0, ScrollDistance],
		outputRange: [HeaderMaxHeight, HeaderMinHeight],
		extrapolate: 'clamp',
	});
	const animatedHeaderOpacity = value.interpolate({
		inputRange: [0, ScrollDistance],
		outputRange: [1, 0],
		extrapolate: 'clamp',
	});

	return (
		<Animated.View
			style={{
				height: animatedHeaderHeight,
				opacity: animatedHeaderOpacity,
			}}
		>
			{children}
		</Animated.View>
	);
};

export default HideOnScroll;
