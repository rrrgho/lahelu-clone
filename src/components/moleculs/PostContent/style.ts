import { StyleSheet } from 'react-native';
import { responsiveHeight } from '@/utils';
import { fontSize } from '@/constants/fonts';
import { dimensions } from '@/constants/dimensions';
import { colors } from '@/constants/colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		maxHeight: responsiveHeight(60),
		backgroundColor: '#888',
	},
	captionContainer: {
		backgroundColor: colors.background,
		paddingHorizontal: dimensions.paddingHorizontal,
		paddingVertical: dimensions.paddingVertical,
	},
	caption: {
		fontSize: fontSize.base,
		fontWeight: 'bold',
		color: '#666',
	},
	video: {
		width: '100%',
	},
	image: {
		width: '100%',
		height: '100%',
	},
	controlsContainer: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
	},
	playPauseButton: {},
	progressBar: {
		height: 5,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		borderRadius: 2.5,
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
	},
	progressFill: {
		height: '100%',
		backgroundColor: colors.primary,
		borderRadius: 2.5,
	},
	playPauseBackground: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		borderRadius: 100,
		width: 65,
		height: 65,
		justifyContent: 'center',
		alignItems: 'center',
	},
	muteButton: {
		position: 'absolute',
		bottom: 30,
		right: 20,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		borderRadius: 100,
		width: 30,
		height: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
	loadingContainer: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
