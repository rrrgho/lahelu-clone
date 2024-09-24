import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { id } from '@/constants/locales/id';

interface ISidebarFooter extends Record<string, never> {}

const SidebarFooter: React.FC<ISidebarFooter> = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.sectionTitle}>{id.information}</Text>
			<View style={styles.itemContainer}>
				<TouchableOpacity style={styles.item}>
					<Text style={styles.itemText}>{id.contact}</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.item}>
					<Text style={styles.itemText}>{id.rule}</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.item}>
					<Text style={styles.itemText}>{id.regulation}</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.itemContainer}>
				<TouchableOpacity style={styles.item}>
					<Text style={styles.itemText}>{id.term}</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.item}>
					<Text style={styles.itemText}>{id.lahelu}</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.item}>
					<Text style={styles.itemText}>{id.coin}</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default SidebarFooter;
