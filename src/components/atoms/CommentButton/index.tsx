import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { ICommentButton } from './type';
import { fontSize } from '@/constants/fonts';

const CommentButton: React.FC<ICommentButton> = ({
	iconName,
	text,
	onPress,
}) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<MaterialIcons
				name={iconName ?? 'message'}
				size={fontSize.icon}
				style={styles.icon}
			/>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	);
};

export default CommentButton;
