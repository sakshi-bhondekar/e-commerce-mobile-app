import { View, Text, Image, StatusBar } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import RoundButtonComp from '../../components/RoundButtonComp';
import FullRoundButtonComp from '../../components/FullRoundButtonComp';
import { _signinwithGoogle } from '../../config/firebase/GoogleSignin';

export default function SignInScreen() {
    const navigation = useNavigation(); // Use useNavigation hook to get navigation object

    async function googleSignIn() {
        _signinwithGoogle().then(data => {
            if (!data) {
                console.log('onError', 'No data');
                return;
            }
            console.log('onSuccess', data);
        });
    }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={'#fffdee'} />
            <View style={{ flex: 0.5 }}>
                <Image
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    resizeMode={'cover'}
                    source={require('../../assets/login.jpg')}
                />
            </View>
            <View style={{ flex: 0.5, backgroundColor: '#fffdee', justifyContent: 'center', alignItems: 'center' }}>
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 30,
                        color: 'black',
                        fontWeight: 'bold', // Corrected font weight to 'fontWeight'
                    }}>
                    Hello
                </Text>

                <Text
                    style={{
                        textAlign: 'center',
                    }}>
                    Welcome to our Ecommerce App
                </Text>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    justifyContent: 'center'
                }}>
                    <RoundButtonComp label={'Login'} width={120} />
                    <RoundButtonComp label={'Sign Up'} border={true} width={120} onPress={() => navigation.navigate('SignUpScreen')} />
                </View>

                <View
                    style={{
                        flex: 1,
                        marginTop: 20,
                        paddingBottom: 20,
                        justifyContent: 'flex-end',
                    }}>
                    <Text
                        style={{
                            textAlign: 'center',
                            marginTop: 20,
                        }}>
                        Or via social media
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 15
                        }}
                    >
                        <FullRoundButtonComp
                            image={require('../../assets/google.png')}
                            bg={'#e02f2f'}
                            onPress={() => googleSignIn()} // Corrected the function call
                        />
                        <FullRoundButtonComp
                            image={require('../../assets/facebook.png')}
                            bg={'#2f80ff'}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}
