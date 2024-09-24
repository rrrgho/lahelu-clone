import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './style';
import { ISidebarMenuItem, ISidebarMenuList } from './type';
import { colors } from '@/constants/colors';

const SidebarMenuList: React.FC<ISidebarMenuList> = ({ menuItems }) => {
	const [activeIndex, setActiveIndex] = useState<number | null>(0);

	const handleItemPress = (index: number) => {
		setActiveIndex(index);
		menuItems[index].onPress();
	};

	const renderItem = ({
		item,
		index,
	}: {
		item: ISidebarMenuItem;
		index: number;
	}) => (
		<TouchableOpacity
			style={[styles.item, activeIndex === index && styles.activeItem]}
			onPress={() => handleItemPress(index)}
		>
			<FontAwesome
				name={item.icon ?? 'home'}
				size={20}
				color={activeIndex === index ? colors.background : colors.text}
				style={styles.icon}
			/>
			<Text
				style={[
					styles.label,
					activeIndex === index
						? { color: colors.background }
						: { color: colors.text },
				]}
			>
				{item.label}
			</Text>
		</TouchableOpacity>
	);

	return (
		<View style={styles.container}>
			<FlatList
				data={menuItems}
				renderItem={renderItem}
				keyExtractor={(item, index) => index.toString()}
			/>
		</View>
	);
};

export default SidebarMenuList;
