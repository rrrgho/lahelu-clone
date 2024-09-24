import React from 'react';
import { TextInput, View } from 'react-native';
import { styles } from './style';
import { ITextField } from './type';

const TextField: React.FC<ITextField> = ({
	placeholder,
	onChangeText,
	...rest
}) => {
	return (
		<View>
			<TextInput
				style={styles.input}
				placeholder={placeholder}
				onChangeText={onChangeText}
				{...rest}
			/>
		</View>
	);
};

export default TextField;
