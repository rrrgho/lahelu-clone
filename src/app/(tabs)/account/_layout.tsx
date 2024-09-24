import { StackScreenHeader } from '@/constants/layout';
import { defaultStyles } from '@/styles';
import { Stack } from 'expo-router';
import { View } from 'react-native';

const AccountScreenLayout = () => {
	const { config } = StackScreenHeader();
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name='index'
					options={{
						...config,
						headerTitle: 'Account',
					}}
				/>
			</Stack>
		</View>
	);
};

export default AccountScreenLayout;
