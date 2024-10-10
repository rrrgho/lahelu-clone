import { Dimensions } from 'react-native';

export const responsiveHeight = (percentage: number) => {
	const screenHeight = Dimensions.get('window').height;
	return (percentage / 100) * screenHeight;
};
export const responsiveWidth = (percentage: number) => {
	const screenHeight = Dimensions.get('window').width;
	return (percentage / 100) * screenHeight;
};

export const formatTime = (seconds: number) => {
	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = Math.floor(seconds % 60);
	const formattedTime = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
	return formattedTime;
};
