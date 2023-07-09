import { Text, View, Image, StyleSheet } from 'react-native';
import { HomeScreenButton } from '../components';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParams = {
  ListOfPlayers: undefined
};

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const navigateToCreateAccount = () => {
    navigation.navigate('ListOfPlayers');
  };

  return (
    <View nativeID='home-screen' style={styles.container}>
      <Image
        source={require('./../assets/mpgLogo.png')}
        resizeMode='contain'
        style={styles.image}
      />

      <Text style={styles.firstTitle}>Voici le test technique de Tharick</Text>

      <HomeScreenButton
        text={'LET\'S GO'}
        handlePress={navigateToCreateAccount}
      />
    </View>
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  firstTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 100,
  },
  image: {
    width: '90%',
  },
});
