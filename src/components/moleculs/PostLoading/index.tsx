import React from 'react';
import { View } from 'react-native';
import styles from './style';

const PostLoading = () => {
	return (
		<View>
			<View style={styles.container}>
				<View style={styles.header}>
					<View style={styles.avatar} />
					<View style={styles.headerText}>
						<View style={styles.username} />
						<View style={styles.timestamp} />
					</View>
				</View>

				<View style={styles.postContent} />

				<View style={styles.media} />

				<View style={styles.actions}>
					<View style={styles.actionButton} />
					<View style={styles.actionButton} />
					<View style={styles.actionButton} />
				</View>
			</View>
		</View>
	);
};

export default PostLoading;
