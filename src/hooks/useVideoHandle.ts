import { useRef, useState } from 'react';
import {
	Easing,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';

export const useVideoHandle = () => {
	const [isPaused, setIsPaused] = useState(true);
	const [isMuted, setIsMuted] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [videoDimensions, setVideoDimensions] = useState({
		width: 16,
		height: 9,
	});
	const videoRef = useRef<any>(null);
	const progress = useSharedValue(0);

	const handlePlayPause = () => {
		setIsPaused(!isPaused);
	};

	const handleMute = () => {
		setIsMuted(!isMuted);
	};

	const onProgress = (data: {
		currentTime: number;
		seekableDuration: number;
	}) => {
		progress.value = withTiming(data.currentTime / data.seekableDuration, {
			duration: 500,
			easing: Easing.linear,
		});
	};

	const onLoadStart = () => {
		setIsLoading(true);
	};

	const onLoad = (data: any) => {
		setIsLoading(false);
		setVideoDimensions({
			width: data.naturalSize.width,
			height: data.naturalSize.height,
		});
	};

	const onEnd = () => {
		videoRef.current?.seek(0);
		setIsPaused(true);
	};

	const progressStyle = useAnimatedStyle(() => ({
		width: `${progress.value * 100}%`,
	}));

	const aspectRatio = videoDimensions.width / videoDimensions.height;
	const videoAspectRatio = aspectRatio < 1 ? 1 / 1 : aspectRatio;

	return {
		isPaused,
		setIsPaused,
		isMuted,
		setIsMuted,
		isLoading,
		setIsLoading,
		videoRef,
		handlePlayPause,
		handleMute,
		onProgress,
		onLoadStart,
		onLoad,
		onEnd,
		progressStyle,
		aspectRatio,
		videoAspectRatio,
	};
};
