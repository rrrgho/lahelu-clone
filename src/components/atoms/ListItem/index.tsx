import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { IListItem } from './type';

const ListItem: React.FC<IListItem> = ({ iconName, text, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<AntDesign
				name={iconName ?? 'download'}
				size={20}
				color='gray'
				style={styles.icon}
			/>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	);
};

export default ListItem;
