import { colors } from '@/constants/colors';
import { dimensions } from '@/constants/dimensions';
import { fontSize } from '@/constants/fonts';
import { responsiveHeight } from '@/utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#DBEDFA',
		borderRadius: dimensions.radius,
		paddingHorizontal: dimensions.paddingHorizontal,
		paddingVertical: dimensions.paddingVertical + responsiveHeight(0.7),
		borderWidth: 1,
		borderColor: colors.primary,
	},
	iconContainer: {
		width: 40,
	},
	icon: {
		marginRight: 8,
		color: 'orange',
	},
	textContainer: {
		flex: 1,
	},
	text: {
		color: colors.text,
		fontSize: fontSize.base,
		fontWeight: 'bold',
	},
});
