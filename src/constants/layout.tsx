import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { colors } from './colors';
import Header from '@/components/oranisms/Header';

export const StackScreenHeader = () => {
	const config: NativeStackNavigationOptions & any = {
		header: () => <Header />,
		headerTitle: '',
		headerTintColor: colors.text,
		headerTransparent: true,
	};

	return {
		config,
	};
};
