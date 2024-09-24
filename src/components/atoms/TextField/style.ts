import { StyleSheet } from 'react-native';
import { colors } from '@/constants/colors';

export const styles = StyleSheet.create({
	input: {
		borderWidth: 1,
		borderColor: colors.borderLight,
		borderRadius: 5,
		padding: 10,
		marginBottom: 10,
		fontSize: 16,
		color: colors.text,
	},
});
