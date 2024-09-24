import { Image } from 'react-native';
import avatarIcon from '@/assets/icons/avatar.png';
import { styles } from './style';
import { FC } from 'react';
import { IAvatar } from './type';

const Avatar: FC<IAvatar> = ({ image }) => {
	return <Image source={image ?? avatarIcon} style={styles.avatar} />;
};

export default Avatar;
