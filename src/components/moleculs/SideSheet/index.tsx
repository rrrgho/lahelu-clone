import React, { useEffect, useRef } from 'react';
import {
	Animated,
	Dimensions,
	Modal,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { styles } from './style';
import { ISideSheet } from './type';
import { FontAwesome } from '@expo/vector-icons';

const SideSheet: React.FC<ISideSheet> = ({
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
				toValue: Dimensions.get('window').width,
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
			<View style={styles.overlay}>
				<Animated.View style={[styles.sheetContent, animatedSheetStyle]}>
					<View style={styles.header}>
						<Text numberOfLines={1} ellipsizeMode='tail' style={styles.title}>
							{title}
						</Text>
						<TouchableOpacity onPress={onClose} style={styles.closeButton}>
							<FontAwesome name='times' size={20} style={styles.closeIcon} />
						</TouchableOpacity>
					</View>
					{children}
				</Animated.View>
				<TouchableWithoutFeedback onPress={onClose}>
					<View style={{ flex: 1 }} />
				</TouchableWithoutFeedback>
			</View>
		</Modal>
	);
};

export default SideSheet;
