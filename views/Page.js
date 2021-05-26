import React from 'react';
import {View, Text} from 'react-native';

export default function Page(props)
{
    return(
        <View>
            <Text>Bem vindo ao Psycholinker {props.nome}!</Text>
        </View>
    )
}