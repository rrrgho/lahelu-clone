import CommentButton from '@/components/atoms/CommentButton';
import LikeUnlikeButton from '@/components/atoms/LikeUnlikeButton';
import ShareButton from '@/components/atoms/ShareButton';
import TagBadge from '@/components/atoms/TagBadge';
import { defaultStyles } from '@/styles';
import { ScrollView, View } from 'react-native';
import { styles } from './style';
import { FC } from 'react';
import { IPostFooter } from './type';
import { id } from '@/constants/locales/id';

const PostFooter: FC<IPostFooter> = ({ onPressComment }) => {
	return (
		<View style={[defaultStyles.container, styles.container]}>
			<View style={styles.scrollViewTag}>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					<View style={styles.tagContainer}>
						<TagBadge text={id.give} isSawer />
						<TagBadge text='terlalu-berharap' />
						<TagBadge text='Sawer' />
						<TagBadge text='Sawer' />
						<TagBadge text='Sawer' />
						<TagBadge text='Sawer' />
						<TagBadge text='Sawer' />
						<TagBadge text='Sawer' />
					</View>
				</ScrollView>
			</View>
			<View style={styles.actionContainer}>
				<View style={styles.feedBack}>
					<LikeUnlikeButton />
					<CommentButton text='15' onPress={onPressComment} />
				</View>
				<View>
					<ShareButton onPress={() => {}} />
				</View>
			</View>
		</View>
	);
};

export default PostFooter;
