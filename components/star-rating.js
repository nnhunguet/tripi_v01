import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text
} from 'react-native';
import { Color } from './Color'; 
import { FontAwesome } from 'react-native-vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
let name = [
    {id: 0, value: "star"},
    {id: 1, value: "star-o"}
];
export default function StarRating(Props) {
        let rating = Props.rating;
        let stars = [];
        for (var i = 0; i < 5; i++) {
            stars.push((<TouchableWithoutFeedback key={i}><FontAwesome name={i < rating ? "star" : "star-o"} size={13} color={Color.primary} style={{paddingRight: 1}}/></TouchableWithoutFeedback>));
        }
		return (
			<View style={ styles.container }>
                { stars }   
			</View>
		);
}

const styles = StyleSheet.create({
	container: {
        flexDirection: 'row'
	}
});