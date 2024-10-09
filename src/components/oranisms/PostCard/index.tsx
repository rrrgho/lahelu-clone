import BottomSheet from '@/components/moleculs/BottomSheet';
import PostContent from '@/components/moleculs/PostContent';
import PostFooter from '@/components/moleculs/PostFooter';
import PostHeader from '@/components/moleculs/PostHeader';
import PostOptions from '@/components/moleculs/PostOptions';
import SideSheet from '@/components/moleculs/SideSheet';
import { id } from '@/constants/locales/id';
import { postOptions } from '@/constants/lov';
import { usePostCardHandle } from '@/hooks/usePostCardHandle';
import { defaultStyles } from '@/styles';
import { forwardRef, memo } from 'react';
import { View } from 'react-native';
import CommentSection from '../CommentSection';
import { styles } from './style';

export interface IPostCard {
	post_id: number;
	caption: string;
	videoUri?: string;
	imageUri?: string;
	name: string;
	likes: number;
	shouldPlay: boolean;
}

const PostCard = memo(
	forwardRef<View, IPostCard>(
		(
			{ post_id, caption, videoUri, imageUri, name, shouldPlay, likes },
			ref,
		) => {
			const {
				optionSheet,
				showPostOption,
				hidePostOption,
				showCommentSection,
				hideCommentSection,
				commentSectionVisible,
			} = usePostCardHandle();

			return (
				<>
					<View style={[defaultStyles.container, styles.container]}>
						<PostHeader
							username={name}
							timestamp={'3 days'}
							onPressThreeDots={showPostOption}
						/>
						<PostContent
							likes={likes}
							shouldPlay={shouldPlay}
							videoUri={videoUri}
							imageUri={imageUri}
							caption={caption}
						/>
						<PostFooter likes={likes} onPressComment={showCommentSection} />
					</View>

					{/* OPTION SECTION */}
					{optionSheet && (
						<BottomSheet
							title={id.option}
							isVisible={optionSheet}
							onClose={hidePostOption}
						>
							<PostOptions options={postOptions} />
						</BottomSheet>
					)}

					{/* COMMENT SECTION */}
					{commentSectionVisible && (
						<SideSheet
							title={caption}
							onClose={hideCommentSection}
							isVisible={commentSectionVisible}
						>
							<CommentSection post_id={post_id} />
						</SideSheet>
					)}
				</>
			);
		},
	),
);

export default PostCard;
