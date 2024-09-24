import { colors } from '@/constants/colors';
import { dimensions } from '@/constants/dimensions';
import { fontSize } from '@/constants/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 10,
		paddingVertical: 10,
		borderRadius: dimensions.radius,
		backgroundColor: colors.background,
		borderWidth: 1,
		borderColor: colors.borderDark,
	},
	icon: {
		color: colors.text,
	},
	text: {
		color: colors.text,
		fontSize: fontSize.base,
		fontWeight: 'bold',
		marginLeft: 5,
		marginBottom: 4,
	},
});
