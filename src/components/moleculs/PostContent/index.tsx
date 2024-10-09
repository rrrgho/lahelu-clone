import { colors } from '@/constants/colors';
import { useVideoHandle } from '@/hooks/useVideoHandle';
import { FontAwesome } from '@expo/vector-icons';
import { ResizeMode, Video } from 'expo-av';
import React, { useEffect } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import {
	GestureDetector,
	PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { styles } from './style';
import { PostContentProps } from './type';

import { useMotionHandler } from '@/hooks/useMotionHandler';

const PostContent: React.FC<PostContentProps> = ({
	videoUri,
	imageUri,
	caption,
	shouldPlay,
}) => {
	const {
		video,
		status,
		setStatus,
		handlePlayPause,
		progressStyle,
		isLoading,
		handleVideoLoad,
		videoHeight,
		videoProperty,
		handleOnReadyForDisplay,
		handleGestureEvent,
		handleGestureStateChange,
		isMuted,
		handleMute,
	} = useVideoHandle();

	const { pinch, animatedStyles } = useMotionHandler();

	useEffect(() => {
		if (videoUri) {
			if (!video.current) return;

			video.current.setPositionAsync(0);
			if (shouldPlay) {
				video.current.playAsync();
			} else {
				video.current.pauseAsync();
			}
		}
	}, [shouldPlay]);

	return (
		<View style={styles.container}>
			<View style={styles.captionContainer}>
				<Text style={styles.caption}>{caption}</Text>
			</View>
			{videoUri ? (
				<GestureDetector gesture={pinch}>
					<Animated.View style={animatedStyles}>
						<View style={[styles.videoContainer]}>
							<Video
								ref={video}
								style={[
									styles.video,
									videoProperty?.naturalSize.orientation === 'landscape' &&
										videoHeight,
								]}
								source={{
									uri: videoUri,
								}}
								useNativeControls={false}
								resizeMode={ResizeMode.CONTAIN}
								isLooping
								onLoad={handleVideoLoad}
								onReadyForDisplay={handleOnReadyForDisplay}
								onPlaybackStatusUpdate={(status) => setStatus(() => status)}
								isMuted={isMuted}
							/>
							{isLoading && (
								<View style={styles.loadingIndicator}>
									<ActivityIndicator size='large' color='white' />
								</View>
							)}
							<View style={styles.videoControllContainer}>
								<TouchableOpacity
									onPress={handlePlayPause}
									style={styles.playPauseContainer}
								>
									<View
										style={[
											styles.playPauseBackground,
											status.isPlaying && { opacity: 0 },
										]}
									>
										<FontAwesome
											name={'play'}
											size={20}
											color={colors.background}
										/>
									</View>
								</TouchableOpacity>
								{/* Mute/Unmute Button */}
								{!isLoading && (
									<TouchableOpacity
										onPress={handleMute}
										style={styles.muteButton}
									>
										<FontAwesome
											name={isMuted ? 'volume-off' : 'volume-up'}
											size={18}
											color={colors.background}
										/>
									</TouchableOpacity>
								)}
								{!isLoading && (
									<PanGestureHandler
										onGestureEvent={handleGestureEvent}
										onHandlerStateChange={handleGestureStateChange}
									>
										<View style={styles.progressBarContainer}>
											<View style={styles.progressBar}>
												<Animated.View
													style={[styles.progressFill, progressStyle]}
												/>
											</View>
										</View>
									</PanGestureHandler>
								)}
							</View>
						</View>
					</Animated.View>
				</GestureDetector>
			) : (
				<View style={styles.imageContainer}>
					<GestureDetector gesture={pinch}>
						<Animated.Image
							source={{ uri: imageUri }}
							resizeMode='cover'
							style={[styles.image, animatedStyles]}
						/>
					</GestureDetector>
				</View>
			)}
		</View>
	);
};

export default PostContent;
