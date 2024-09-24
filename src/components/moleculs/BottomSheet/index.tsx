import { FontAwesome5 } from '@expo/vector-icons';
import React, { useEffect, useRef } from 'react';
import {
	Animated,
	Modal,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { styles } from './style';
import { IBottomSheet } from './type';

const BottomSheet: React.FC<IBottomSheet> = ({
	isVisible,
	onClose,
	title,
	children,
}) => {
	const translateY = useRef(new Animated.Value(1)).current;

	useEffect(() => {
		if (isVisible) {
			Animated.timing(translateY, {
				toValue: 0,
				duration: 300,
				useNativeDriver: true,
			}).start();
		} else {
			Animated.timing(translateY, {
				toValue: 1,
				duration: 200,
				useNativeDriver: true,
			}).start(() => onClose());
		}
	}, [isVisible]);

	const animatedSheetStyle = {
		transform: [
			{
				translateY: translateY.interpolate({
					inputRange: [0, 1],
					outputRange: [0, 1000],
				}),
			},
		],
	};

	return (
		<Modal
			visible={isVisible}
			animationType='fade'
			transparent
			onRequestClose={onClose}
		>
			<TouchableWithoutFeedback onPress={onClose}>
				<View style={styles.overlay}>
					<Animated.View style={[styles.sheetContent, animatedSheetStyle]}>
						<View style={styles.header}>
							<Text style={styles.title}>{title}</Text>
							<TouchableOpacity onPress={onClose} style={styles.closeButton}>
								<FontAwesome5 name='times' size={20} />
							</TouchableOpacity>
						</View>
						{children}
					</Animated.View>
				</View>
			</TouchableWithoutFeedback>
		</Modal>
	);
};

export default BottomSheet;
