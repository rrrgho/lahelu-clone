import { colors } from '@/constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		marginBottom: 16,
		padding: 16,
		backgroundColor: colors.background,
		borderRadius: 8,
		borderBottomWidth: 1,
		borderColor: colors.borderLight,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 8,
	},
	avatar: {
		width: 40,
		height: 40,
		borderRadius: 90,
		marginRight: 12,
		backgroundColor: colors.gray,
	},
	headerText: {
		flex: 1,
		borderRadius: 8,
	},
	username: {
		width: '60%',
		height: 16,
		marginBottom: 4,
		backgroundColor: colors.gray,
		borderRadius: 8,
	},
	timestamp: {
		width: '40%',
		height: 12,
		backgroundColor: colors.gray,
		borderRadius: 8,
	},
	postContent: {
		width: '90%',
		height: 10,
		marginBottom: 8,
		backgroundColor: colors.gray,
		borderRadius: 8,
	},
	media: {
		width: '100%',
		height: 200,
		marginBottom: 12,
		borderRadius: 8,
		backgroundColor: colors.gray,
	},
	actions: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	actionButton: {
		width: 30,
		height: 30,
		borderRadius: 5,
		backgroundColor: colors.gray,
	},
});

export default styles;
