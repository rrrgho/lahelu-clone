import { dimensions } from '@/constants/dimensions';
import { fontSize } from '@/constants/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: dimensions.paddingVertical,
	},
	icon: {
		marginRight: 10,
	},
	text: {
		fontSize: fontSize.base,
	},
});
