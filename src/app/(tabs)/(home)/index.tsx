import Announcement from '@/components/moleculs/Announcement';
import HideOnScroll from '@/components/moleculs/HideOnScroll';
import PostLoading from '@/components/moleculs/PostLoading';
import Tabs from '@/components/moleculs/Tabs';
import PostCard from '@/components/oranisms/PostCard';
import { id } from '@/constants/locales/id';
import { IPost } from '@/constants/type';
import { usePostDataHandler } from '@/hooks/usePostDataHandler';
import { usePostScrollHandler } from '@/hooks/usePostScrollHandler';
import { defaultStyles } from '@/styles';
import { FlatList, View } from 'react-native';
import { styles } from './style';

const HomeScreen = () => {
	const {
		onScrollY,
		scrollOffsetY,
		posts,
		isLoading,
		isFetching,
		fakeFetching,

		handleRefresh,
		handleReload,
	} = usePostDataHandler();

	const { viewabilityConfigCallbackPairs, currentViewableItemIndex } =
		usePostScrollHandler();
	return (
		<View style={[defaultStyles.container, styles.container]}>
			<HideOnScroll value={scrollOffsetY}>
				<View style={styles.tabArea}>
					<Tabs
						tabs={[
							{ label: id.home, onPress: handleRefresh },
							{ label: id.fresh, onPress: handleRefresh },
							{
								label: id.trending,
								onPress: handleRefresh,
							},
						]}
					/>
				</View>
			</HideOnScroll>
			<View style={styles.postSection}>
				<View>
					<FlatList
						data={posts}
						ListHeaderComponent={
							<View style={styles.announcement}>
								<Announcement text={id.announcement} />
							</View>
						}
						renderItem={({
							item,
							index,
						}: {
							item: IPost & any;
							index: number;
						}) => (
							<View key={index} style={styles.postItem}>
								{isLoading ? (
									<PostLoading />
								) : (
									<PostCard
										shouldPlay={index === currentViewableItemIndex}
										likes={item.like}
										post_id={item.id}
										name={item.user.name}
										imageUri={item.image}
										videoUri={item.video}
										caption={item.caption}
									/>
								)}
							</View>
						)}
						/**
						 * API DUPLICATE RESPONSE POSSIBLE
						 * because the API could possibly return same data with same id,
						 * I prefer to use index instead of ID to prevent children same identity.
						 */
						keyExtractor={(item) => item.uid.toString()}
						onScroll={onScrollY}
						viewabilityConfigCallbackPairs={
							viewabilityConfigCallbackPairs.current
						}
						scrollEventThrottle={5}
						refreshing={false}
						onRefresh={handleRefresh}
						onEndReached={handleReload}
						onEndReachedThreshold={0.01}
						ListFooterComponent={
							isFetching || isLoading || fakeFetching ? <PostLoading /> : null
						}
					/>
				</View>
			</View>
		</View>
	);
};

export default HomeScreen;
