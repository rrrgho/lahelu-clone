import { colors } from '@/constants/colors';
import { dimensions } from '@/constants/dimensions';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		paddingHorizontal: dimensions.paddingHorizontal,
		paddingVertical: dimensions.paddingVertical,
	},
	historyTextTitle: {
		textAlign: 'center',
		fontStyle: 'italic',
		color: colors.text,
	},
});
