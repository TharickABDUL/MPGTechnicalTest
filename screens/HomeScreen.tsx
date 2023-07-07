import { Text, View, Image } from 'react-native';
import { HomeScreenButton } from '../components';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToCreateAccount = () => {
    navigation.navigate('ListOfPlayers' as never);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
      }}
    >
      <Image
        source={require('./../assets/mpgLogo.png')}
        resizeMode='contain'
        style={{ width: '90%' }}
      />
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginTop: 25,
          marginBottom: 100,
        }}
      >
        Voici le test technique de Tharick
      </Text>
      <HomeScreenButton
        text={'LET\'S GO'}
        handlePress={navigateToCreateAccount}
      />
    </View>
  );
};

export default HomeScreen;
