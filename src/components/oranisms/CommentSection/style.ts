import { colors } from '@/constants/colors';
import { dimensions } from '@/constants/dimensions';
import { responsiveHeight } from '@/utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	commentContainer: {
		flex: 1,
	},
	postCommentContainer: {
		height: responsiveHeight(8),
		backgroundColor: colors.background,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: dimensions.paddingHorizontal,
		borderTopWidth: 1,
		borderColor: colors.borderDark,
		gap: 20,
	},
	inputCommentContainer: {
		flex: 1,
	},
});
