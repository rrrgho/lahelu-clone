import { StyleSheet } from 'react-native';
import { colors } from '@/constants/colors';
import { dimensions } from '@/constants/dimensions';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: dimensions.paddingHorizontal,
		paddingVertical: dimensions.paddingVertical,
	},
	tabsContainer: {
		flexDirection: 'row',
	},
	tab: {
		paddingHorizontal: 12,
		paddingVertical: 6,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: colors.primary,
		marginRight: 8,
	},
	activeTab: {
		backgroundColor: colors.primary,
	},
	tabText: {
		fontSize: 14,
		color: colors.primary,
	},
	activeTabText: {
		color: 'white',
		fontWeight: 'bold',
	},
	commentCount: {
		fontSize: 14,
		color: colors.text,
		fontWeight: 'bold',
	},
});
