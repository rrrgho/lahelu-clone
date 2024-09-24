import TextField from '@/components/atoms/TextField';
import { id } from '@/constants/locales/id';
import { Text, View } from 'react-native';
import { styles } from './style';

const SearchSection = () => {
	return (
		<View style={styles.container}>
			<TextField placeholder={id.searchTextFieldPlaceHolder} />
			<Text style={styles.historyTextTitle}>
				{id.searchHistoryTitleNotExist}
			</Text>
		</View>
	);
};

export default SearchSection;
