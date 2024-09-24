import HideOnScroll from '@/components/moleculs/HideOnScroll';
import Tabs from '@/components/moleculs/Tabs';
import PostCard from '@/components/oranisms/PostCard';
import { id } from '@/constants/locales/id';
import { IPost } from '@/constants/type';
import { usePostDataHandler } from '@/hooks/usePostDataHandler';
import { defaultStyles } from '@/styles';
import { FlatList, View } from 'react-native';
import { styles } from './style';
import PostLoading from '@/components/moleculs/PostLoading';
import Announcement from '@/components/moleculs/Announcement';

const HomeScreen = () => {
	const {
		onScrollY,
		scrollOffsetY,

		isLoading,
		isFetching,
		posts,

		handleRefresh,
		handleReload,
	} = usePostDataHandler();

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
						data={isLoading ? Array.from({ length: 3 }) : posts}
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
							<View key={isLoading ? index : item.id} style={styles.postItem}>
								{isLoading ? (
									<PostLoading />
								) : (
									<PostCard
										key={item.id}
										post_id={item.id}
										name={item.user.name}
										imageUri={item.image}
										videoUri={item.video}
										caption={item.caption}
									/>
								)}
							</View>
						)}
						keyExtractor={(item: any, index) =>
							(isLoading ? index : item.id).toString()
						}
						onScroll={onScrollY}
						scrollEventThrottle={5}
						refreshing={isFetching}
						onRefresh={handleRefresh}
						onEndReached={handleReload}
						onEndReachedThreshold={0.1}
						ListFooterComponent={isLoading ? <PostLoading /> : null}
					/>
				</View>
			</View>
		</View>
	);
};

export default HomeScreen;
