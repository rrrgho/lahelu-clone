import { colors } from '@/constants/colors';
import { dimensions } from '@/constants/dimensions';
import { fontSize } from '@/constants/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: dimensions.paddingVertical,
		borderBottomWidth: 1,
		borderBottomColor: colors.borderLight,
	},
	avatar: {
		marginRight: 10,
	},
	content: {
		flex: 1,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	username: {
		fontWeight: 'bold',
		marginRight: 5,
		color: colors.text,
	},
	timestamp: {
		fontSize: 12,
		color: colors.textMuted,
	},
	commentText: {
		marginTop: 5,
		color: colors.text,
	},
	actions: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 5,
	},
	likeText: {
		color: colors.text,
		marginLeft: 10,
		fontSize: fontSize.sm - 2,
	},
	actionText: {
		marginLeft: 15,
		color: colors.textMuted,
	},
	threeDots: {
		marginLeft: 15,
		marginTop: 5,
	},
});
