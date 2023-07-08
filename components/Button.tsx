import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { X } from 'react-native-feather';

type HomeScreenButtonProps = { text: string, handlePress: () => void }

export const HomeScreenButton = ({ text, handlePress }: HomeScreenButtonProps) => (
  <TouchableOpacity style={styles.homeButton} onPress={handlePress}>
    <Text style={styles.text}>{text}</Text>
    <Image
      source={require('../assets/socckerBall.png')}
      resizeMode='contain'
      style={styles.image}
    />
  </TouchableOpacity>
);

type ClearButtonProps = { clearAndCloseFunc: () => void, marginLeft: number }

export const ClearButton = ({ clearAndCloseFunc, marginLeft }: ClearButtonProps) => (
  <TouchableOpacity style={{ marginLeft: marginLeft }} onPress={clearAndCloseFunc}>
    <X stroke={'black'} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  homeButton: {
    backgroundColor: '#45C845',
    borderRadius: 15,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 80,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    fontStyle: 'italic',
    paddingRight: 20,
    color: '#4049CA',
  },
  image: {
    width: '20%',
    height: '60%',
  },
});
