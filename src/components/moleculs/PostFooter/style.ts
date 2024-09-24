import { colors } from '@/constants/colors';
import { dimensions } from '@/constants/dimensions';
import { responsiveHeight } from '@/utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		paddingVertical: dimensions.paddingVertical,
	},
	scrollViewTag: {
		paddingHorizontal: dimensions.paddingHorizontal,
	},
	tagContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		flexDirection: 'row',
		backgroundColor: colors.background,

		gap: 10,
	},
	actionContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		flexWrap: 'wrap',
		flexDirection: 'row',
		backgroundColor: colors.background,
		height: responsiveHeight(7),
		alignContent: 'center',
		alignItems: 'center',
		paddingHorizontal: dimensions.paddingHorizontal,
		marginTop: 10,
	},
	feedBack: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		backgroundColor: '#fff',
		gap: 10,
	},
});
