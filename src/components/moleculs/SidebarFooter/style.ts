import { colors } from '@/constants/colors';
import { dimensions } from '@/constants/dimensions';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		paddingHorizontal: dimensions.paddingHorizontal,
		paddingVertical: dimensions.paddingVertical,
		height: 100,
	},
	sectionTitle: {
		fontSize: 16,
		fontWeight: 'bold',
		color: colors.primary,
		marginBottom: 10,
	},
	itemContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	item: {
		marginRight: 10,
		marginBottom: 5,
	},
	itemText: {
		fontSize: 14,
		color: colors.text,
	},
});
