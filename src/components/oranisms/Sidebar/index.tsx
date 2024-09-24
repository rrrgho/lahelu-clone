import CollapsibleLists from '@/components/moleculs/CollapsibleLists';
import SelectableMenuList from '@/components/moleculs/SelectableMenuList';
import SidebarFooter from '@/components/moleculs/SidebarFooter';
import SidebarMenuList from '@/components/moleculs/SidebarMenuList';
import SidebarSheet from '@/components/moleculs/SidebarSheet';
import { id } from '@/constants/locales/id';
import { useSidebarHandler } from '@/hooks/useSidebarHandler';
import { FC } from 'react';
import { View } from 'react-native';
import { styles } from './style';
import { ISidebar } from './type';

const Sidebar: FC<ISidebar> = ({ isSidebarVisible, handleCloseSidebar }) => {
	const { menuItems, otherMemeOptions, exploreOptions } = useSidebarHandler();
	return (
		<SidebarSheet isVisible={isSidebarVisible} onClose={handleCloseSidebar}>
			<View>
				<View style={{ marginTop: 10 }}>
					<SidebarMenuList menuItems={menuItems} />
				</View>
				<View style={styles.borderedSectionContainer}>
					<CollapsibleLists title={id.otherMeme} items={otherMemeOptions} />
				</View>
				<CollapsibleLists title={id.explore} items={exploreOptions} />
				<SelectableMenuList
					title={id.browse}
					menuItems={Array.from({ length: 10 }, () => {
						return {
							icon: 'home',
							label: 'Cringe',
							onPress: () => {},
						};
					})}
				/>
				<SidebarFooter />
			</View>
		</SidebarSheet>
	);
};

export default Sidebar;
