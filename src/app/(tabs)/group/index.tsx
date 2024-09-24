import HideOnScroll from '@/components/moleculs/HideOnScroll';
import Tabs from '@/components/moleculs/Tabs';
import { useScrollHandler } from '@/hooks/useScrollHandler';
import { defaultStyles } from '@/styles';
import { View } from 'react-native';
import { styles } from './style';

const GroupScreen = () => {
	const { scrollOffsetY } = useScrollHandler();
	return (
		<View style={defaultStyles.container}>
			<HideOnScroll value={scrollOffsetY}>
				<View style={styles.tabArea}>
					<Tabs
						tabs={[
							{ label: 'Topik', onPress: () => {} },
							{ label: 'Sudah Gabung', onPress: () => {} },
						]}
					/>
				</View>
			</HideOnScroll>
		</View>
	);
};

export default GroupScreen;
