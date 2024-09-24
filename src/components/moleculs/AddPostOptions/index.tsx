import { FC } from 'react';
import BottomSheet from '../BottomSheet';
import PostOptions from '../PostOptions';
import { IAddPostOption } from './type';
import { id } from '@/constants/locales/id';

const AddPostOptions: FC<IAddPostOption> = ({
	postOptionVisible,
	onClose,
	options,
}) => {
	return (
		<BottomSheet
			title={id.content + ' ' + id.creator}
			isVisible={postOptionVisible}
			onClose={onClose}
		>
			<PostOptions options={options} />
		</BottomSheet>
	);
};

export default AddPostOptions;
