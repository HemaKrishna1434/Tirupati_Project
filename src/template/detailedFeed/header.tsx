import {View, Text} from 'react-native';
import React from 'react';
import Avatar from '../../components/atom/avatar';
import {More} from 'iconsax-react-native';
import styles from './styles';
import {formatRelativeTime} from '../../utils';

interface HeaderProps {
  userId: string;
  time: any;
}

const Header = ({time, userId}) => {
  console.log('Header', time);
  const date = formatRelativeTime(time);
  return (
    <View style={styles.headerContainer}>
      <View style={{flexDirection: 'row'}}>
        <Avatar uri={profilePic} width={42} height={42} borderRadius={60} />
        <View style={styles.headerTitleContainer}>
          <Text style={styles.primaryText}>{name}</Text>
          <Text>{date}</Text>
        </View>
      </View>
      <More
        style={{transform: [{rotate: '90deg'}]}}
        color="#454C52"
        size={20}
      />
    </View>
  );
};

export default Header;
