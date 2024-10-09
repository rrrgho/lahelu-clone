import React, { FC } from 'react';
import { Animated } from 'react-native';
import { IHideOnScroll } from './type';

const HeaderMaxHeight = 108;
const HeaderMinHeight = 60;
const ScrollDistance = 200;

const HideOnScroll: FC<IHideOnScroll> = ({ value, children }) => {
	const animatedMarginTop = value.interpolate({
		inputRange: [0, ScrollDistance],
		outputRange: [1, -HeaderMinHeight],
		extrapolate: 'clamp',
	});

	return (
		<Animated.View
			style={{
				height: HeaderMaxHeight,
				marginTop: animatedMarginTop,
			}}
		>
			{children}
		</Animated.View>
	);
};

export default HideOnScroll;
