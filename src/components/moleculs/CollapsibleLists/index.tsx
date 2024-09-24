import React, { useState } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	FlatList,
	LayoutAnimation,
	Platform,
	UIManager,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './style';
import { ICollapsibleLists, ICollapsibleListsItem } from './type';
import { colors } from '@/constants/colors';

if (
	Platform.OS === 'android' &&
	UIManager.setLayoutAnimationEnabledExperimental
) {
	UIManager.setLayoutAnimationEnabledExperimental(true);
}

const CollapsibleLists: React.FC<ICollapsibleLists> = ({ title, items }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleExpand = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		setIsExpanded(!isExpanded);
	};

	const renderItem = ({ item }: { item: ICollapsibleListsItem }) => (
		<TouchableOpacity onPress={item.onPress} style={styles.item}>
			<FontAwesome
				name={item.icon}
				size={20}
				color={colors.text}
				style={styles.icon}
			/>
			<Text style={styles.label}>{item.label}</Text>
		</TouchableOpacity>
	);

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={toggleExpand} style={styles.header}>
				<Text style={styles.title}>{title}</Text>
				<FontAwesome
					name={isExpanded ? 'chevron-up' : 'chevron-down'}
					size={16}
					color={colors.text}
				/>
			</TouchableOpacity>
			{isExpanded && (
				<FlatList
					data={items}
					renderItem={renderItem}
					keyExtractor={(item, index) => index.toString()}
				/>
			)}
		</View>
	);
};

export default CollapsibleLists;
