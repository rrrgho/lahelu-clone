import { colors } from '@/constants/colors';
import { dimensions } from '@/constants/dimensions';
import { fontSize } from '@/constants/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		justifyContent: 'flex-end',
	},
	sheetContent: {
		backgroundColor: 'white',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: colors.borderDark,
		paddingHorizontal: dimensions.paddingHorizontal,
		paddingVertical: dimensions.paddingVertical,
	},
	title: {
		fontSize: fontSize.base,
		fontWeight: 'bold',
	},
	closeButton: {
		padding: 10,
	},
	closeButtonText: {
		fontSize: 18,
	},
});
