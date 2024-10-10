import { useRef, useState } from 'react';
import { Dimensions, ViewStyle } from 'react-native';
import { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

interface IVideoDimenssion {
	height: number;
	orientation: string;
	width: number;
}

interface IVideoStatus {
	androidImplementation: string;
	audioPan: number;
	didJustFinish: boolean;
	durationMillis: number;
	isBuffering: boolean;
	isLoaded: boolean;
	isLooping: boolean;
	isMuted: boolean;
	isPlaying: boolean;
	playableDurationMillis: number;
	positionMillis: number;
	progressUpdateIntervalMillis: number;
	rate: number;
	shouldCorrectPitch: boolean;
	shouldPlay: boolean;
	uri: string;
	volume: number;
}

export interface IVideo {
	naturalSize: IVideoDimenssion;
	status: IVideoStatus;
}

export const useVideoHandle = () => {
	/**
	 * Video properties
	 */
	const video = useRef<any>(null);
	const naturalRatio = 16 / 9;
	const [status, setStatus] = useState<any>({});
	const [isLoading, setIsLoading] = useState(true);
	const screenHeight = Dimensions.get('window').width / (16 / 9);
	const [videoProperty, setVideoProperty] = useState<IVideo>();
	const [videoHeight, setVideoHeight] = useState<ViewStyle>();

	/**
	 * Video Controller Properties
	 */

	const [isDragging, setIsDragging] = useState(false);
	const [initialProgress, setInitialProgress] = useState(0);
	const progress = useSharedValue(0);
	const [currentTime, setCurrentTime] = useState(0);
	const [isMuted, setIsMuted] = useState(false);
	const [sliderPosition, setSliderPosition] = useState(0);

	/**
	 * Handle video on and after load,
	 * these function are preventing bugs or unexpected
	 * behaviour when the video is not ready to display or it
	 * is still being loaded from the server
	 */

	const handleVideoLoad = () => {
		setIsLoading(false);
	};

	const handleOnReadyForDisplay = (videoData: IVideo | any) => {
		if (videoData && videoData.naturalSize) {
			setVideoProperty(videoData);
			const videoRatio =
				videoData.naturalSize.width / videoData.naturalSize.height;
			setVideoHeight({
				height: (screenHeight * naturalRatio) / videoRatio,
			});
		}
	};

	/**
	 * Video Controller
	 * These state properties and functions
	 * are created to handle Video Controller, time slider, progress bar
	 * and other controller.
	 */

	const handleMute = () => {
		setIsMuted((prevIsMuted) => !prevIsMuted);
	};

	const handlePlayPause = () => {
		if (status.isPlaying) {
			video.current.pauseAsync();
		} else {
			video.current.playAsync();
		}
	};

	const handleGestureEvent = (event: any) => {
		if (isDragging) {
			const newProgress =
				initialProgress + event.nativeEvent.translationX / 250;
			if (newProgress >= 0 && newProgress <= 1) {
				progress.value = newProgress;
				const newCurrentTime = newProgress * (status.durationMillis || 0);
				setCurrentTime(newCurrentTime / 1000);
				setSliderPosition(progress.value * 80);
			}
		}
	};

	const handleGestureStateChange = (event: any) => {
		if (event.nativeEvent.state === 2) {
			setIsDragging(true);
			setInitialProgress(progress.value);
		} else if (event.nativeEvent.state === 5) {
			setIsDragging(false);
			const newPositionMillis = progress.value * (status.durationMillis || 0);
			video.current?.setPositionAsync(newPositionMillis);
		}
	};

	const progressStyle = useAnimatedStyle(() => {
		const progressPercentage = isDragging
			? progress.value
			: status.positionMillis / status.durationMillis;
		const draggedStyle = isDragging
			? {
					height: 8,
					bottom: 2,
				}
			: {
					height: 5,
					bottom: 0,
				};
		return {
			width: `${progressPercentage * 100}%`,
			...draggedStyle,
		};
	});

	return {
		video,
		status,
		handlePlayPause,
		progressStyle,
		setStatus,
		isLoading,
		handleVideoLoad,
		handleOnReadyForDisplay,
		videoProperty,
		videoHeight,
		handleGestureEvent,
		handleGestureStateChange,
		isMuted,
		handleMute,
		currentTime,
		isDragging,
		sliderPosition,
	};
};
