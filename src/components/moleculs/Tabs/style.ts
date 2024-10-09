import { colors } from '@/constants/colors';
import { fontSize } from '@/constants/fonts';
import { responsiveHeight } from '@/utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		// backgroundColor: 'red',
		backgroundColor: colors.background,
		height: responsiveHeight(5),
		borderBottomWidth: 1,
		borderBottomColor: colors.borderLight,
	},
	tab: {
		alignItems: 'center',
		height: responsiveHeight(5),
		alignContent: 'center',
		justifyContent: 'center',
	},
	activeTab: {
		borderBottomWidth: 2,
		borderBottomColor: colors.primary,
	},
	tabText: {
		fontSize: fontSize.sm,
		fontWeight: '500',
		color: colors.text,
	},
	activeTabText: {
		color: colors.primary,
	},
});
