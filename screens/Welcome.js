import React from 'react';
import { 
  ImageBackground, 
  StyleSheet, 
  View, 
  Text, 
  Image,
  TouchableOpacity, 
} from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return(
    <ImageBackground style={styles.backGround} source={require('../assets/Welcome.jpg')}  >
      <View style={styles.logoContainer}>  
        <Image style={styles.logo} source={require('../assets/newlogo.jpg')}/> 
        <Text style={{fontSize: 35, fontWeight: 'bold', paddingTop: 15}}>X-Force</Text> 
      </View>  
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          navigation.navigate('SignUp');
        }}
      >
        <Text style={{color: "#fff", fontSize: 24, fontWeight: '400'}}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signupText}
        onPress={() => {
          navigation.navigate('Login');
        }}
      >
        <Text style={{color: '#fff', fontSize: 16}}>Already have account? </Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    backGround: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: "center",
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
    logo: {
        height: 70,
        width: 70,
    },
    loginButton: {
        width: "70%",
        height: 50,
        backgroundColor: '#54d3c2',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    },
    signupText: {
        width: '100%',
        height: '20%',
        flexDirection: 'row',
        top: '5%',
        justifyContent: "center",
    },
})


