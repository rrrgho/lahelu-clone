import Avatar from '@/components/atoms/Avatar';
import { defaultStyles } from '@/styles';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { PostHeaderProps } from './type';

const PostHeader: React.FC<PostHeaderProps> = ({
	username,
	timestamp,
	onPressThreeDots,
}) => {
	return (
		<View style={[defaultStyles.container, styles.container]}>
			<Avatar />
			<View style={styles.textContainer}>
				<Text style={styles.username}>{username} </Text>
				<View style={styles.dotSeparator} />
				<Text style={styles.timestamp}>{timestamp}</Text>
			</View>
			<TouchableOpacity onPress={onPressThreeDots} style={styles.dotsContainer}>
				<FontAwesome name='ellipsis-h' size={20} color='gray' />
			</TouchableOpacity>
		</View>
	);
};

export default PostHeader;
