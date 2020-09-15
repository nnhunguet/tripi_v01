import React, { useEffect, useState } from 'react';
import {View, Text, Dimensions} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
const hp = Dimensions.get('window').height;
const wp = Dimensions.get('window').width;
export default function Topnavigate(props){
    const safeArea = useSafeAreaInsets();
    const {title, scrollA} = props;
    const isFloating = !!scrollA;
    const [isTransparent, setTransparent] = useState(isFloating);
    useEffect(() => {
        if(!scrollA) {
            return;
        }
        const listenerId = scrollA.addListener(a => {
            const topNaviOffset = hp/3 - 50 - safeArea.top;
            isTransparent !== (a.value < topNaviOffset) && 
                setTransparent(!isTransparent);
        });
        return () => scrollA.removeListener(listenerId);
    });

    return(
        <>
            <StatusBar
                barStyle ={isTransparent ? "light-content" : 'dark-content'}
                backgroundColor = 'transparent'
                translucent
            />
            <View style={styles.container(safeArea, isFloating, isTransparent)}>
                <Text numberOfLines={2} style={styles.title(isTransparent)}>{title}</Text>
            </View>
        </>
    )
}
const styles = {
    container: (safeArea, isFloating, isTransparent) => ({
        paddingTop: safeArea.top,
        marginBottom: isFloating ? - 50 - safeArea.top : 0,
        height: 50 + safeArea.top,
        justifyContent: 'center',
        shadowOffset: {y: 0},
        backgroundColor: isTransparent ? 'transparent' : '#fff',
        shadowOpacity: isTransparent ? 0 : 5,
        elevation: isTransparent ? 0 : 5,
        zIndex: 100,
        paddingLeft: wp/10,
        paddingRight: wp/10
    }),
    title: isTransparent => ({
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        color: isTransparent ? 'transparent' : '#000',
    }),
};


