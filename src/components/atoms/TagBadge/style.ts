import { colors } from '@/constants/colors';
import { dimensions } from '@/constants/dimensions';
import { fontSize } from '@/constants/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 30,
		paddingHorizontal: dimensions.paddingHorizontal / 2,
		borderRadius: 100,
		backgroundColor: colors.background,
		borderWidth: 1,
		borderColor: colors.borderDark,
	},
	sawerIconContainer: {
		backgroundColor: colors.background,
		height: 20,
		width: 20,
		borderRadius: 100,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
	},
	sawerIcon: {
		color: 'orange',
	},
	icon: {
		marginRight: 2,
		color: colors.text,
	},
	text: {
		color: colors.text,
		fontSize: fontSize.sm,
		fontWeight: '500',
		marginLeft: 10,
		marginBottom: 2,
	},
});
