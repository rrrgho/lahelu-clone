import ListItem from '@/components/atoms/ListItem';
import { View } from 'react-native';
import { styles } from './style';
import { IPostOption } from './type';
import { FC } from 'react';

const PostOptions: FC<IPostOption> = ({ options }) => {
	return (
		<View style={styles.container}>
			{options &&
				options.map((option: any, key: number) => {
					return (
						<ListItem
							key={key}
							text={option.text}
							iconName={option.icon}
							onPress={option.onPress}
						/>
					);
				})}
		</View>
	);
};

export default PostOptions;
