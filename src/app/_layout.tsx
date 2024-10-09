import FloatingAlert from '@/components/moleculs/FloatingAlert';
import { RootState, store } from '@/store';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as Updates from 'expo-updates';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider, useSelector } from 'react-redux';
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
					<GestureHandlerRootView style={{ flex: 1 }}>
						<RootNavigation />
					</GestureHandlerRootView>
					<StatusBar style='auto' />
				</SafeAreaView>
			</SafeAreaProvider>
		</Provider>
	);
};

const RootNavigation = () => {
	const errorApi = useSelector((state: RootState) => state.errorApi);
	return (
		<>
			{errorApi.status && (
				<FloatingAlert
					title='Error !'
					description={errorApi.errorMessage ?? 'An error occured'}
				/>
			)}
			<Stack>
				<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
			</Stack>
		</>
	);
};

export default App;
