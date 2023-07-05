import {TouchableOpacity, Text, Image} from "react-native";

export const HomeScreenButton = ({text, handlePress}: any) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: '#45C845',
                borderRadius: 15,
                width: '70%',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                height: 80

            }}
            onPress={handlePress}>
            <Text style={{fontSize: 28, fontWeight: 'bold', fontStyle: 'italic', paddingRight: 20, color: '#4049CA'}}>
                {text}
            </Text>
            <Image
                source={require('../assets/socckerBall.png')}
                resizeMode="contain"
                style={{width: '20%', height: '60%'}}
            />
        </TouchableOpacity>
    );
};