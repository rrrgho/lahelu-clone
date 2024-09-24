import logo from '@/assets/images/logo.png';
import SideSheet from '@/components/moleculs/SideSheet';
import { colors } from '@/constants/colors';
import { useHeaderHandler } from '@/hooks/useHeaderHandler';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import SearchSection from '../SearchSection';
import Sidebar from '../Sidebar';
import { styles } from './style';
import { HeaderProps } from './type';

const Header: React.FC<HeaderProps> = () => {
	const {
		isSideSheetVisible,
		handleSearchPress,
		handleCloseSideSheet,
		isSidebarVisible,
		handleOpenSidebar,
		handleCloseSidebar,
	} = useHeaderHandler();

	return (
		<View>
			<View style={styles.container}>
				<View style={styles.brandArea}>
					<TouchableOpacity onPress={handleOpenSidebar}>
						<FontAwesome name='bars' size={24} color={colors.text} />
					</TouchableOpacity>
					<Image source={logo} style={styles.logo} />
				</View>
				<TouchableOpacity onPress={handleSearchPress}>
					<FontAwesome name='search' size={24} color={colors.text} />
				</TouchableOpacity>
			</View>

			{/* Search Section */}
			<SideSheet
				isVisible={isSideSheetVisible}
				onClose={handleCloseSideSheet}
				title='Cari meme'
			>
				<SearchSection />
			</SideSheet>

			{/* Sidebar Section */}
			<Sidebar
				isSidebarVisible={isSidebarVisible}
				handleCloseSidebar={handleCloseSidebar}
			/>
		</View>
	);
};
export default Header;
