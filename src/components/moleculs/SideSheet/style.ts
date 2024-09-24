import { colors } from '@/constants/colors';
import { fontSize } from '@/constants/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	sheetContent: {
		backgroundColor: 'white',
		width: '100%',
		height: '100%',
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingVertical: 15,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
	},
	title: {
		fontSize: fontSize.lg,
		fontWeight: 'bold',
		flex: 1,
		color: colors.text,
	},
	closeButton: {
		padding: 10,
	},
	closeButtonText: {
		fontSize: 18,
	},
	closeIcon: {
		color: colors.text,
	},
});
