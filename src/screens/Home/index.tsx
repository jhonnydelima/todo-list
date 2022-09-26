import { Image, View } from 'react-native';

import { styles } from './styles';

import LogoImg from '../../assets/logo.png';

export function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={LogoImg}
      />

    </View>
  );
}