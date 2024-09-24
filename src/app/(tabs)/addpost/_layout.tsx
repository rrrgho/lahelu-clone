import { StackScreenHeader } from '@/constants/layout';
import { defaultStyles } from '@/styles';
import { Stack } from 'expo-router';
import { View } from 'react-native';

const AddPostScreenLayout = () => {
	const { config } = StackScreenHeader();
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name='index'
					options={{
						...config,
						headerTitle: 'Add Post',
					}}
				/>
			</Stack>
		</View>
	);
};

export default AddPostScreenLayout;
