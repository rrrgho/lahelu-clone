import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

interface ICommentHeaderProps {
	onTabChange: (tab: 'Populer' | 'Terbaru') => void;
	commentCount: number;
}

const CommentHeader: React.FC<ICommentHeaderProps> = ({
	onTabChange,
	commentCount,
}) => {
	const [activeTab, setActiveTab] = useState<'Populer' | 'Terbaru'>('Populer');

	const handleTabPress = (tab: 'Populer' | 'Terbaru') => {
		setActiveTab(tab);
		onTabChange(tab);
	};

	return (
		<View style={styles.container}>
			<View style={styles.tabsContainer}>
				<TouchableOpacity
					style={[styles.tab, activeTab === 'Populer' && styles.activeTab]}
					onPress={() => handleTabPress('Populer')}
				>
					<Text
						style={[
							styles.tabText,
							activeTab === 'Populer' && styles.activeTabText,
						]}
					>
						Populer
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.tab, activeTab === 'Terbaru' && styles.activeTab]}
					onPress={() => handleTabPress('Terbaru')}
				>
					<Text
						style={[
							styles.tabText,
							activeTab === 'Terbaru' && styles.activeTabText,
						]}
					>
						Terbaru
					</Text>
				</TouchableOpacity>
			</View>
			<Text style={styles.commentCount}>{commentCount} Komentar</Text>
		</View>
	);
};

export default CommentHeader;
