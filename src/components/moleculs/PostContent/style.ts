import { colors } from '@/constants/colors';
import { dimensions } from '@/constants/dimensions';
import { fontSize } from '@/constants/fonts';
import { responsiveHeight } from '@/utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
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
	loadingIndicator: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		width: '100%',
		height: '100%',
	},
	videoContainer: {
		maxHeight: responsiveHeight(65),
		backgroundColor: colors.borderLight,
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
	},
	video: {
		width: '100%',
		height: '100%',
	},
	videoControllContainer: {
		height: '100%',
		width: '100%',
		position: 'absolute',
		top: 0,
		backgroundColor: 'transparent',
	},
	playPauseContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	playPauseButton: {
		// No specific styles needed here
	},
	playPauseBackground: {
		backgroundColor: 'rgba(0,0,0, 0.3)',
		borderRadius: 100,
		width: 70,
		height: 70,
		alignItems: 'center',
		justifyContent: 'center',
	},

	progressBarContainer: {
		height: 30,
		justifyContent: 'flex-end',
	},
	progressBar: {
		height: 5,
		backgroundColor: colors.gray,
	},
	progressFill: {
		height: 3,
		backgroundColor: colors.primary,
	},

	muteButton: {
		position: 'absolute',
		bottom: 30,
		right: 20,
		width: 30,
		height: 30,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		borderRadius: 100,
		zIndex: 9,
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageContainer: {
		maxHeight: responsiveHeight(65),
		zIndex: 9999,
	},

	box: {
		width: 100,
		height: 100,
		borderRadius: 20,
		backgroundColor: '#b58df1',
	},
	dot: {
		width: 24,
		height: 24,
		borderRadius: 12,
		backgroundColor: '#ccc',
		position: 'absolute',
		left: '50%',
		top: '50%',
		pointerEvents: 'none',
	},
});
