import AddPostOptions from '@/components/moleculs/AddPostOptions';
import { colors } from '@/constants/colors';
import { usePostAddHandler } from '@/hooks/usePostAddHandler';
import { AntDesign, Feather, FontAwesome6 } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { TouchableOpacity } from 'react-native';

const TabNavigation = () => {
	const {
		addPostOption,
		addPostOptionVisible,
		showPostAddOption,
		hidePostAddOption,
	} = usePostAddHandler();
	return (
		<>
			<Tabs
				screenOptions={{
					tabBarActiveTintColor: colors.primary,
					tabBarShowLabel: false,
					headerShown: false,
				}}
			>
				<Tabs.Screen
					name='(home)'
					options={{
						tabBarIcon: ({ color }) => (
							<AntDesign name='home' size={25} color={color} />
						),
					}}
				/>
				<Tabs.Screen
					name='group'
					options={{
						tabBarIcon: ({ color }) => (
							<Feather name='users' size={25} color={color} />
						),
					}}
				/>
				<Tabs.Screen
					name='addpost'
					options={{
						tabBarIcon: ({ color }) => (
							<AntDesign name='pluscircleo' size={25} color={color} />
						),
						tabBarButton: (props) => (
							<TouchableOpacity {...props} onPress={showPostAddOption} />
						),
					}}
				/>
				<Tabs.Screen
					name='account'
					options={{
						tabBarIcon: ({ color }) => (
							<FontAwesome6 name='user-circle' size={25} color={color} />
						),
					}}
				/>
			</Tabs>

			{/* 
				Here we render Floating option when user
				click at "AddPost" Tab
			*/}
			{addPostOptionVisible && (
				<AddPostOptions
					postOptionVisible={addPostOptionVisible}
					options={addPostOption}
					onClose={hidePostAddOption}
				/>
			)}
		</>
	);
};

export default TabNavigation;
