import { colors } from '@/constants/colors';
import { fontSize } from '@/constants/fonts';
import { StyleSheet } from 'react-native';

const defaultStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
	},
	text: {
		fontSize: fontSize.base,
		color: colors.text,
	},
});

export { defaultStyles };
