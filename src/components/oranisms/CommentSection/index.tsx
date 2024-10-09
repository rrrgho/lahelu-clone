import TextField from '@/components/atoms/TextField';
import CommentHeader from '@/components/moleculs/CommentHeader';
import CommentItem from '@/components/moleculs/CommentItem';
import CommentLoading from '@/components/moleculs/CommentLoading';
import { id } from '@/constants/locales/id';
import { IComment } from '@/constants/type';
import { useCommentDataHandler } from '@/hooks/useCommentDataHandler';
import { defaultStyles } from '@/styles';
import { AntDesign } from '@expo/vector-icons';
import { FC } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { styles } from './style';
import { ICommentSection } from './type';

const CommentSection: FC<ICommentSection> = ({ post_id }) => {
	const { comments, refreshing, onRefresh, isFetching } = useCommentDataHandler(
		{
			post_id,
		},
	);
	return (
		<View style={defaultStyles.container}>
			<View>
				<CommentHeader
					onTabChange={() => {}}
					commentCount={comments?.length ?? 0}
				/>
			</View>
			<ScrollView
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
				showsVerticalScrollIndicator={false}
				style={styles.commentContainer}
			>
				{!isFetching ? (
					<>
						{comments.map((comment: IComment, index: number) => {
							return (
								<CommentItem
									key={index}
									like={comment.likes}
									username={comment.user.name}
									timestamp='1 day'
									comment={comment.comment}
								/>
							);
						})}
					</>
				) : (
					<View>
						{new Array(13).fill('').map((item, i) => {
							return <CommentLoading key={i} />;
						})}
					</View>
				)}
			</ScrollView>
			<View style={styles.postCommentContainer}>
				<View style={styles.inputCommentContainer}>
					<TextField placeholder={id.commentTextFieldPlaceholder} />
				</View>
				<View>
					<AntDesign name='paperclip' size={25} />
				</View>
			</View>
		</View>
	);
};

export default CommentSection;
