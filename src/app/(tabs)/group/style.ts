import { colors } from '@/constants/colors';
import { dimensions } from '@/constants/dimensions';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {},
	postSection: {
		flex: 1,
		backgroundColor: colors.gray,
	},
	postItem: {
		marginBottom: 5,
	},
	tabArea: {
		position: 'absolute',
		top: dimensions.headerHeight,
		zIndex: 9,
	},
	listItem: {
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
	},
});
