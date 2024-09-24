import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';
import { fontSize } from '@/constants/fonts';

export const styles = StyleSheet.create({
	container: {},
	item: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 15,
	},
	activeItem: {
		backgroundColor: colors.primary,
	},
	icon: {
		marginRight: 10,
	},
	label: {
		fontSize: fontSize.sm,
		fontWeight: '700',
	},
});
