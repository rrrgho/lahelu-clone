import { TextInput, TextInputProps } from 'react-native';

export interface ITextField extends TextInputProps {
	ref?: React.RefObject<TextInput>;
}
