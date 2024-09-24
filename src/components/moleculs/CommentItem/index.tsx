import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Avatar from '../../atoms/Avatar';
import { styles } from './style';

interface ICommentItem {
	username: string;
	timestamp: string;
	comment: string;
	like?: number;
}

const CommentItem: React.FC<ICommentItem> = ({
	username,
	timestamp,
	comment,
	like,
}) => {
	return (
		<View style={styles.container}>
			<Avatar />
			<View style={styles.content}>
				<View style={styles.header}>
					<Text style={styles.username}>{username}</Text>
					<Text style={styles.timestamp}>{timestamp}</Text>
				</View>
				<Text style={styles.commentText}>{comment}</Text>
				<View style={styles.actions}>
					<TouchableOpacity>
						<FontAwesome name='thumbs-o-up' size={16} color='gray' />
					</TouchableOpacity>
					<Text style={styles.likeText}>{like}</Text>
					<Text style={styles.actionText}>Balas</Text>
					<TouchableOpacity style={styles.threeDots}>
						<FontAwesome name='ellipsis-h' size={16} color='gray' />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default CommentItem;
