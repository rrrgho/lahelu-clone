import { useVideoHandle } from '@/hooks/useVideoHandle';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import {
	ActivityIndicator,
	Image,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import Animated from 'react-native-reanimated';
import Video from 'react-native-video';
import { styles } from './style';
import { PostContentProps } from './type';
import { colors } from '@/constants/colors';

const PostContent: React.FC<PostContentProps> = ({
	videoUri,
	imageUri,
	caption,
}) => {
	const {
		isPaused,
		isMuted,
		isLoading,
		videoRef,
		handlePlayPause,
		handleMute,
		onProgress,
		onLoadStart,
		onLoad,
		onEnd,
		progressStyle,
		videoAspectRatio,
	} = useVideoHandle();
	return (
		<View style={styles.container}>
			<View style={styles.captionContainer}>
				<Text style={styles.caption}>{caption}</Text>
			</View>
			{videoUri ? (
				<View>
					<Video
						source={{ uri: videoUri }}
						style={[styles.video, { aspectRatio: videoAspectRatio }]}
						paused={isPaused}
						resizeMode='contain'
						onProgress={onProgress}
						ref={videoRef}
						muted={isMuted}
						onLoadStart={onLoadStart}
						onLoad={onLoad}
						onEnd={onEnd}
					/>
					{/* Conditionally render controls and loading indicator */}
					{!isLoading && (
						<View style={styles.controlsContainer}>
							<TouchableOpacity
								onPress={handlePlayPause}
								style={styles.playPauseButton}
							>
								<View style={styles.playPauseBackground}>
									<FontAwesome
										name={isPaused ? 'play' : 'pause'}
										size={20}
										color={colors.background}
									/>
								</View>
							</TouchableOpacity>
							<TouchableOpacity onPress={handleMute} style={styles.muteButton}>
								<FontAwesome
									name={isMuted ? 'volume-off' : 'volume-up'}
									size={20}
									color={colors.background}
								/>
							</TouchableOpacity>
						</View>
					)}
					{isLoading && (
						<View style={styles.loadingContainer}>
							<ActivityIndicator size='large' color='white' />
						</View>
					)}
					<View style={styles.progressBar}>
						<Animated.View style={[styles.progressFill, progressStyle]} />
					</View>
				</View>
			) : (
				<Image
					source={{ uri: imageUri }}
					resizeMode='cover'
					style={styles.image}
				/>
			)}
			{/* {isLoading && !videoUri && (
				<View style={styles.loadingContainer}>
					<ActivityIndicator size='large' color='black' />
				</View>
			)} */}
		</View>
	);
};

export default PostContent;
