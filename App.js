import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import Page from './views/Page';
import {css} from './assets/CSS/css';


export default function App() {
  const [nome,setNome]=useState('EX');
  const [cpf,setCpf]=useState('cpf');
  const props={
    nome: 'alexandre',
    cpf:'35265565895'
  };
  useEffect(()=>{
    setNome('Novo nome');
  });

  return (
    <View style={css.textPage}>
      <Text>Oi!

      </Text>
      <Text>{nome}</Text>
      <StatusBar style="auto" />
      <Page{...props}/>
    </View>
  );
}


