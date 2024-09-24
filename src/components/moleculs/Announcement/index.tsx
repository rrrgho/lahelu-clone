import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './style';
import { IAnnouncementProps } from './type';

const Announcement: React.FC<IAnnouncementProps> = ({ text }) => {
	return (
		<View style={styles.container}>
			<View style={styles.iconContainer}>
				<Text style={styles.text}>🎉</Text>
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.text}>{text}</Text>
			</View>
		</View>
	);
};

export default Announcement;
