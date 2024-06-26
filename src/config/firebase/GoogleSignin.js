import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from '@react-native-firebase/auth'


export const _signinwithGoogle = async () => {
    try {
        GoogleSignin.configure({
            offlineAccess: false,
            webClientId: 'abcd123',
            scopes: ['profile', 'email']
        })
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn;

        const { idToken } = await GoogleSignin.signIn(); // This line initiates the Google Sign-In process

        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        await auth().signInWithCredential(googleCredential);
        return userInfo;
    } catch (error) {
        console.log('<> Google Sign In', error)
    }
}
