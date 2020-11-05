/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text, Button, FlatList} from 'react-native';

const App = () => {
  const addEntry = () => {
    // eslint-disable-next-line no-alert
    
    alert('Abrir tela de adicionar Lançamento');
    console.log('olá estou no console');
  };

  return (
    <View style={{padding: 10}}>
      <Text 
        style={{fontSize: 22,
        fontWeight: 'bold', 
        marginTop: 10,
        marginBottom: 10
        }}>
          Saldo: $2.102,45
      </Text>
      <Button 
        title="Adicionar"
        onPress={addEntry}
      >
      </Button>

      <Text
        style={{fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10}}
        >Categorias
      </Text>

      <FlatList
        data={[
          {key: 'Alimentação: $200'},
          {key: 'Combustível: $12'},
          {key: 'Aluguel: $120'},
          {key: 'Lazer: $250'},
          {key: 'Outros: $1200'}
        ]}
      renderItem={({item}) => <Text>{item.key}</Text>}
      ></FlatList>


      <Text
        style={{fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10}}
        >últimos Lançamentos
      </Text>

      <FlatList
        data={[
          {key: 'Padaria Asa Branca: $10'},
          {key: 'Supermercado Isadora: $190'},
          {key: 'Posto Ipiranga: $260'}
        ]}
      renderItem={({item}) => <Text>{item.key}</Text>}
      ></FlatList>
    </View>
  );
};


export default App;
