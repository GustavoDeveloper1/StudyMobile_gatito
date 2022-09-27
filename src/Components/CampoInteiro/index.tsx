import React from "react";
import { TextInput } from "react-native";

export default function CampoInteiro({ valor, acao }: any) {

    const numberToString = String(valor)

    return (
        <>
            <TextInput
                keyboardType="number-pad"
                selectTextOnFocus
                onChangeText={(novoValor) => { acao(novoValor) }}
                value={numberToString} />
        </>
    )
}