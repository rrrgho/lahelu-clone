import { store } from '@/store';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import * as Updates from 'expo-updates';
const App = () => {
	useEffect(() => {
		async function checkForUpdates() {
			try {
				const update = await Updates.checkForUpdateAsync();
				if (update.isAvailable) {
					await Updates.fetchUpdateAsync();
					Updates.reloadAsync();
				}
			} catch (er) {
				console.log(er);
			}
		}

		checkForUpdates();
	}, []);
	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<SafeAreaView style={{ flex: 1 }}>
					<RootNavigation />
					<StatusBar style='auto' />
				</SafeAreaView>
			</SafeAreaProvider>
		</Provider>
	);
};

const RootNavigation = () => {
	return (
		<Stack>
			<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
		</Stack>
	);
};

export default App;
