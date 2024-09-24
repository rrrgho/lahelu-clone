import { colors } from '@/constants/colors';
import { dimensions } from '@/constants/dimensions';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: dimensions.paddingHorizontal,
		position: 'relative',
	},
	username: {
		fontWeight: 'bold',
		marginRight: 5,
		color: colors.text,
	},
	timestamp: {
		fontSize: 12,
		color: 'gray',
	},
	dotsContainer: {
		marginLeft: 'auto',
	},
	textContainer: {
		flex: 1,
		flexDirection: 'row',
		alignContent: 'center',
		alignItems: 'center',
	},
	dotSeparator: {
		width: 3,
		height: 3,
		borderRadius: 2,
		backgroundColor: 'gray',
		marginHorizontal: 5,
		marginTop: 2,
	},

	optionsContainer: {
		position: 'absolute',
		top: 0,
		right: 10,
		backgroundColor: 'black',
		borderRadius: 5,
		elevation: 5,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 2,
	},
	optionItem: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
	},
	optionIcon: {
		marginRight: 8,
	},
	optionText: {
		color: 'white',
	},
});
