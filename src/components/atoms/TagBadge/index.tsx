import { colors } from '@/constants/colors';
import { Feather, FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { ITagBadge } from './type';

const TagBadge: React.FC<ITagBadge> = ({
	iconName,
	text,
	onPress,
	isSawer,
}) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={[
				styles.container,
				isSawer && { backgroundColor: 'orange', borderColor: 'orange' },
			]}
		>
			{isSawer ? (
				<View style={styles.sawerIconContainer}>
					<FontAwesome name='dollar' style={styles.sawerIcon} />
				</View>
			) : (
				<Feather name={iconName ?? 'hash'} size={15} style={styles.icon} />
			)}

			<Text style={[styles.text, isSawer && { color: colors.background }]}>
				{text}
			</Text>
		</TouchableOpacity>
	);
};

export default TagBadge;
