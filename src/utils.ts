import { Dimensions } from 'react-native';

export const responsiveHeight = (percentage: number) => {
	const screenHeight = Dimensions.get('window').height;
	return (percentage / 100) * screenHeight;
};
export const responsiveWidth = (percentage: number) => {
	const screenHeight = Dimensions.get('window').width;
	return (percentage / 100) * screenHeight;
};
