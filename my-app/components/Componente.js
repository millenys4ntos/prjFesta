import React from "react";
import {StyleSheet, Text, View} from "react-native";

export default function Tabuada(props){
    let txt = [];
    let refri = 600;    
    let agua = 200;
    let bolo = 100;
    let doce = 3;
    let salgadinho = 10;

    txt.push(
            <Text style = {styles.txt}>
                Quantidade de mantimentos {'\n'}
                Refrigerante: {(refri * parseFloat(props.num))/1000} L {'\n'}
                Água: {(agua * parseFloat(props.num))/1000} L {'\n'}
                Bolo: {(bolo * parseFloat(props.num))/1000} Kg {'\n'}
                Doces: {doce * parseFloat(props.num)} unidades {'\n'}
                Salgadinhos: {salgadinho * parseFloat(props.num)} unidades {'\n'}
            </Text>
        );
    
    return(
        <>
            <View style = {styles.container}>
                {txt}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        fontFamily: 'Helvetica',
        width: '30%',
        padding: 18,
        borderRadius: 15,  
        backgroundColor: '#1F9EFF',
    },
    txt: {
        textAlign: "left",
        fontSize: 25,   
        marginLeft: '60px',
        fontWeight: 400,
        color: '#EBFEFF',
    }
});