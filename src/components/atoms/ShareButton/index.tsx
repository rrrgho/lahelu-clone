import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { IShareButton } from './type';
import { fontSize } from '@/constants/fonts';

const ShareButton: React.FC<IShareButton> = ({ iconName, text, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<MaterialCommunityIcons
				name={iconName ?? 'share'}
				size={fontSize.icon}
				style={styles.icon}
			/>
			{text && <Text style={styles.text}>{text}</Text>}
		</TouchableOpacity>
	);
};

export default ShareButton;
