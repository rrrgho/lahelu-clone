import { colors } from '@/constants/colors';
import { dimensions } from '@/constants/dimensions';
import { fontSize } from '@/constants/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent',
		borderWidth: 1,
		borderRadius: dimensions.radius,
		borderColor: colors.borderDark,
	},
	button: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 10,
		paddingVertical: 10,
	},
	separator: {
		width: 1,
		height: '80%',
		backgroundColor: 'gray',
		marginHorizontal: 10,
	},
	icon: {
		marginRight: 5,
		color: colors.text,
	},
	text: {
		color: colors.text,
		fontSize: fontSize.base,
		fontWeight: 'bold',
	},
});
