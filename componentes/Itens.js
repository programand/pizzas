import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropType from 'prop-types';

class Itens extends React.Component{
    static PropType = {
        itens: PropType.array.isRequired
    };

render(){
    return(
        <View style={styles.listaItens}>
            {this.props.itens.map(({item}, index) =>{
                return(
                    <View key={index}>
                        <Text style={styles.textItens}>
                            {item}
                        </Text>
                    </View>
                );
            })}
        </View>
    );
}
}
export default Itens;

const styles = StyleSheet.create({
    listaItens:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    textItens:{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});