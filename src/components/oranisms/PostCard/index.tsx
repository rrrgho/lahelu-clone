import BottomSheet from '@/components/moleculs/BottomSheet';
import PostContent from '@/components/moleculs/PostContent';
import PostFooter from '@/components/moleculs/PostFooter';
import PostHeader from '@/components/moleculs/PostHeader';
import PostOptions from '@/components/moleculs/PostOptions';
import SideSheet from '@/components/moleculs/SideSheet';
import { id } from '@/constants/locales/id';
import { usePostCardHandle } from '@/hooks/usePostCardHandle';
import { defaultStyles } from '@/styles';
import { FC } from 'react';
import { View } from 'react-native';
import CommentSection from '../CommentSection';
import { styles } from './style';
import { postOptions } from '@/constants/lov';

export interface IPostCard {
	post_id: number;
	caption: string;
	videoUri?: string;
	imageUri?: string;
	name: string;
}

const PostCard: FC<IPostCard> = ({
	post_id,
	caption,
	videoUri,
	imageUri,
	name,
}) => {
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
					timestamp='1 day'
					onPressThreeDots={showPostOption}
				/>
				<PostContent
					videoUri={videoUri}
					imageUri={imageUri}
					caption={caption}
				/>
				<PostFooter onPressComment={showCommentSection} />
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
};

export default PostCard;
