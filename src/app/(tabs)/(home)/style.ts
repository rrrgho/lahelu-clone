import { colors } from '@/constants/colors';
import { dimensions } from '@/constants/dimensions';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {},
	postSection: {
		flex: 1,
		backgroundColor: colors.background,
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
	announcement: {
		paddingVertical: dimensions.paddingVertical + 10,
		paddingHorizontal: dimensions.paddingHorizontal,
	},
});
