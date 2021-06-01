import React from 'react';
import {Button, View, Text, StyleSheet, Image} from 'react-native';
import pizzaiolo from './img/pizzaiolo.png';
export default class Inicial extends React.Component{
    render(){
        return(
            <View style={styles.fundo}>
              
                <Text style={styles.titulo}>Pizzaria Alyan's</Text>
                 <img src={pizzaiolo} alt={"pizzaiolo"} /> 


            <View style={styles.conteudoBtns}>
                <Button style={styles.conteudoBtns}
                    title="Anotar Pedido"
                    color="red"
                    onPress={() =>
                    this.props.navigation.navigate('AdicionaItens')    
                    }                
                /> 
                <br/>
                <Button style={styles.conteudoBtns}
                    title="Lista de pedidos"
                    color="#228B22"
                    onPress={() =>
                    this.props.navigation.navigate('ListaItens')    
                    }                
                />  
            </View>
            </View>
        );
}}
const styles = StyleSheet.create({
    conteudoBtns:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',

    },

    fundo:{
        backgroundColor: "black",
        flex: 1,
         padding: 30,
    },
    titulo:{
          marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        color: "white",
    },
});
