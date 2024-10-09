import memeExploreItemImage from '@/assets/icons/meme-explore.webp';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { ISelectableMenuItem, ISelectableMenuList } from './type';

const RenderItem = ({ item }: { item: ISelectableMenuItem }) => (
	<TouchableOpacity style={styles.item}>
		<View style={{ flexDirection: 'row', alignItems: 'center' }}>
			<View style={styles.listImageContainer}>
				<Image
					source={memeExploreItemImage}
					resizeMode='contain'
					style={styles.listImage}
				/>
			</View>
			<Text style={styles.label}>{item.label}</Text>
		</View>
		<View style={styles.selectedIconContainer}>
			<FontAwesome name='star-o' size={20} color='black' />
		</View>
	</TouchableOpacity>
);

const SelectableMenuList: React.FC<ISelectableMenuList> = ({
	menuItems,
	title,
}) => {
	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>{title}</Text>
			</View>
			{menuItems.map((item: ISelectableMenuItem) => (
				<RenderItem item={item} key={item.id} />
			))}
		</View>
	);
};

export default SelectableMenuList;
