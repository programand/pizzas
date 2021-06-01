import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import Itens from './Itens';

import {db} from '../Config/config';

class ListaItens extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            itens: [],
        };
    }

    componentDidMount(){
        db.collection('itens').get().then((resultado)=>{
            const q_itens =[]
            resultado.forEach((doc)=>{
                q_itens.push({id:doc.id,item:doc.data()['item']})
            })
            this.setState({itens : q_itens})
        })
    }
    render(){
        return(
            <View style={styles.conteudoPrincipal}>
                 <ImageBackground
        source={require('./img/fundoitens.jpg')}
        style={styles.backgroundImage}>
      
                {
                    this.state.itens.length > 0
                    ? <Itens itens={this.state.itens}/>
                    : <Text>Não há itens salvos</Text>
                }
            </ImageBackground>
            </View>
        )
    }
}
    export default ListaItens;

    const styles = StyleSheet.create({
        conteudoPrincipal:{
            flex: 1,    
            justifyContent: 'center',
            backgroundColor: 'black',
    },
      backgroundImage:{
    flex : 1,
    width : '100%'
},
});
