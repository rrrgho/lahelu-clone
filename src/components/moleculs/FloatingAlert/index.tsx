import { clearApiError } from '@/store/error/apiErrorSlice';
import React, { useEffect, useRef } from 'react';
import { Animated, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { styles } from './style';
import { IFloatingAlertProps } from './type';

const FloatingAlert: React.FC<IFloatingAlertProps> = ({
	title,
	description,
}) => {
	const translateY = useRef(new Animated.Value(-100)).current;
	const dispatch = useDispatch();

	useEffect(() => {
		Animated.timing(translateY, {
			toValue: 0,
			duration: 300,
			useNativeDriver: true,
		}).start();

		const timeout = setTimeout(() => {
			Animated.timing(translateY, {
				toValue: -100,
				duration: 300,
				useNativeDriver: true,
			}).start();
			dispatch(clearApiError());
		}, 5000);

		return () => clearTimeout(timeout);
	}, []);

	const animatedStyle = {
		transform: [{ translateY }],
	};

	return (
		<Animated.View style={[styles.container, animatedStyle]}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.description}>{description}</Text>
		</Animated.View>
	);
};

export default FloatingAlert;
