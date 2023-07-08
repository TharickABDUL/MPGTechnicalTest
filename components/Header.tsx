import { View, Text, TouchableOpacity } from 'react-native';

import { ArrowLeft } from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';

type HeaderProps = { text: string }

const Header = ({ text }: HeaderProps) => {
  const navigation = useNavigation();

  const navigateToCreateAccount = () => {
    navigation.goBack();
  };
  return (
    <View style={{ height: 75, width: '100%' }}>
      <View style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
        <TouchableOpacity style={{ alignSelf: 'center' }} onPress={navigateToCreateAccount}>
          <ArrowLeft stroke={'black'} />
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 18, marginBottom: 5 }}>Test Technique de Tharick</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{text}</Text>
        </View>
      </View>
      <View style={{ marginVertical: 10, borderWidth: 1 }} />
    </View>
  );
};

export default Header;