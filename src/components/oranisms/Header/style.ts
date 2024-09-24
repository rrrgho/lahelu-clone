import { colors } from '@/constants/colors';
import { dimensions } from '@/constants/dimensions';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: dimensions.paddingHorizontal,
		backgroundColor: colors.background,
		height: dimensions.headerHeight,
		borderBottomWidth: 1,
		borderColor: colors.borderLight,
	},
	brandArea: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	logo: {
		width: 120,
		resizeMode: 'contain',
		marginLeft: 20,
		marginTop: 2,
	},
});
