import { responsiveWidth } from '@/utils';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { TabsProps } from './type';

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
	const [activeTab, setActiveTab] = useState(0);

	const handleTabPress = (index: number) => {
		setActiveTab(index);
		tabs[index].onPress();
	};

	return (
		<View style={styles.container}>
			{tabs.map((tab, index) => (
				<TouchableOpacity
					key={index}
					style={[
						styles.tab,
						index === activeTab && styles.activeTab,
						{ width: responsiveWidth(100 / tabs.length) },
					]}
					onPress={() => handleTabPress(index)}
				>
					<Text
						style={[
							styles.tabText,
							index === activeTab && styles.activeTabText,
						]}
					>
						{tab.label}
					</Text>
				</TouchableOpacity>
			))}
		</View>
	);
};

export default Tabs;
