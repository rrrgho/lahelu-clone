import React, { useEffect, useRef } from 'react';
import {
	Animated,
	Dimensions,
	Modal,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { styles } from './style';
import { ISidebarSheet } from './type';

const SidebarSheet: React.FC<ISidebarSheet> = ({
	isVisible,
	onClose,
	title,
	children,
}) => {
	const translateX = useRef(
		new Animated.Value(Dimensions.get('window').width),
	).current;

	useEffect(() => {
		if (isVisible) {
			Animated.timing(translateX, {
				toValue: 0,
				duration: 300,
				useNativeDriver: true,
			}).start();
		} else {
			Animated.timing(translateX, {
				toValue: -Dimensions.get('window').width,
				duration: 500,
				useNativeDriver: true,
			}).start(() => onClose());
		}
	}, [isVisible]);

	const animatedSheetStyle = {
		transform: [
			{
				translateX,
			},
		],
	};

	return (
		<Modal
			visible={isVisible}
			animationType='none'
			transparent
			onRequestClose={onClose}
		>
			<TouchableWithoutFeedback onPress={onClose}>
				<View style={styles.overlay}>
					<Animated.View style={[styles.sheetContent, animatedSheetStyle]}>
						{children}
					</Animated.View>
					<TouchableWithoutFeedback onPress={onClose}>
						<View style={{ flex: 1 }} />
					</TouchableWithoutFeedback>
				</View>
			</TouchableWithoutFeedback>
		</Modal>
	);
};

export default SidebarSheet;
