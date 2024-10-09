import { Dimensions } from 'react-native';
import { Gesture } from 'react-native-gesture-handler';
import {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('screen');

export const useMotionHandler = () => {
	const scale = useSharedValue(1);
	const startScale = useSharedValue(0);

	function clamp(val: any, min: any, max: any) {
		return Math.min(Math.max(val, min), max);
	}

	const pinch = Gesture.Pinch()
		.onStart(() => {
			startScale.value = scale.value;
		})
		.onUpdate((event) => {
			scale.value = clamp(
				startScale.value * event.scale,
				0.5,
				Math.min(width / 100, height / 100),
			);
		})
		.onEnd(() => {
			scale.value = withTiming(1);
		})
		.runOnJS(true);

	const animatedStyles = useAnimatedStyle(() => ({
		transform: [{ scale: scale.value }],
	}));

	return {
		pinch,
		animatedStyles,
	};
};
