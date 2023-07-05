import {Text, View, Image} from "react-native";
import {HomeScreenButton} from "../components";

const ClubScreen = () => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF'}}>
            <Image
                source={require('./../assets/mpgLogo.png')}
                resizeMode="contain"
                style={{width: '90%'}}
            />
            <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 25, marginBottom: 100}}>Voici le test technique
                de Tharick</Text>
            <Text> HEYYYY HEYYYYY</Text>

        </View>
    );
}

export default ClubScreen