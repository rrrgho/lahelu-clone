import { colors } from '@/constants/colors';
import { fontSize } from '@/constants/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 15,
	},
	title: {
		fontSize: fontSize.sm + 2,
		fontWeight: 'bold',
		color: colors.text,
	},
	item: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 15,
	},
	icon: {
		marginRight: 10,
	},
	label: {
		fontSize: fontSize.sm,
		color: colors.text,
	},
});
