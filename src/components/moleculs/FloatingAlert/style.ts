import { colors } from '@/constants/colors';
import { fontSize } from '@/constants/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.background,
		padding: 16,
		borderRadius: 8,
		position: 'absolute',
		top: 50, // Position at the top
		left: 16,
		right: 16,
		zIndex: 10, // Ensure it's above other content
		elevation: 5, // For Android shadow
	},
	title: {
		fontSize: fontSize.sm,
		fontWeight: 'bold',
		color: colors.primary, // Use your primary color for the title
		marginBottom: 4,
	},
	description: {
		fontSize: fontSize.xs,
		color: colors.text,
	},
});
