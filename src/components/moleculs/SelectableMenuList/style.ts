import { colors } from '@/constants/colors';
import { dimensions } from '@/constants/dimensions';
import { responsiveHeight } from '@/utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		maxHeight: responsiveHeight(40),
	},
	item: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: dimensions.paddingHorizontal,
		paddingVertical: dimensions.paddingVertical - 4,
	},
	titleContainer: {
		paddingHorizontal: dimensions.paddingHorizontal,
	},
	title: {
		fontWeight: 'bold',
		color: colors.primary,
	},
	selectedIconContainer: {
		backgroundColor: colors.background,
		borderRadius: 10,
		padding: 5,
		marginTop: 2,
	},
	listImageContainer: {
		width: 25,
		height: 25,
	},
	listImage: {
		width: '100%',
		height: 30,
	},
	label: {
		fontSize: 16,
		color: colors.text,
		marginLeft: 10,
	},
});
