import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { ArrowLeft } from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';

type HeaderProps = { text: string }

const Header = ({ text }: HeaderProps) => {
  const navigation = useNavigation();

  const navigateToCreateAccount = () => {
    navigation.goBack();
  };

  return (
    <View nativeID='header' style={styles.container}>

      <TouchableOpacity style={styles.backButton} onPress={navigateToCreateAccount}>
        <ArrowLeft stroke={'black'} />
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <Text style={styles.firstTitle}>Test Technique de Tharick</Text>
        <Text style={styles.secondTitle}>{text}</Text>
      </View>

      <View style={styles.verticalLine} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 75,
    width: '100%',
  },
  backButton: {
    position: 'absolute',
    marginTop: 13,
    marginLeft: 15,
    zIndex: 1,
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  secondTitle:
    {
      fontSize: 20,
      fontWeight: 'bold',
    },
  verticalLine: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#C0C0C0',
  },
});