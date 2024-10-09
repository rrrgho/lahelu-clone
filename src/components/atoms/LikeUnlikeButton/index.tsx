import { colors } from '@/constants/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { ILikeUnlikeButton } from './type';
import { fontSize } from '@/constants/fonts';

const LikeUnlikeButton: React.FC<ILikeUnlikeButton> = ({
	initialLikes,
	onLike,
	onUnlike,
}) => {
	const [likes, setLikes] = useState(initialLikes);
	const [isLiked, setIsLiked] = useState(false);

	const handleLike = () => {
		if (!isLiked) {
			setLikes(likes + 1);
			setIsLiked(true);
			onLike?.();
		}
	};

	const handleUnlike = () => {
		if (isLiked) {
			setLikes(likes - 1);
			setIsLiked(false);
			onUnlike?.();
		}
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={handleLike} style={styles.button}>
				<MaterialCommunityIcons
					name='arrow-up-bold-outline'
					size={fontSize.icon}
					color={isLiked ? colors.primary : 'gray'}
					style={styles.icon}
				/>
				<Text style={[styles.text, isLiked && { color: colors.primary }]}>
					{likes}
				</Text>
			</TouchableOpacity>
			<View style={styles.separator} />
			<TouchableOpacity onPress={handleUnlike} style={styles.button}>
				<MaterialCommunityIcons
					name='arrow-down-bold-outline'
					size={fontSize.icon}
					color={isLiked ? 'blue' : 'gray'}
					style={styles.icon}
				/>
			</TouchableOpacity>
		</View>
	);
};

export default LikeUnlikeButton;
