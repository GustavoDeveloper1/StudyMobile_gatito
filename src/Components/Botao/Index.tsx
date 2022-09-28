import React from "react";
import { Text, TouchableOpacity } from "react-native";

import estilos from "./estilos";

export default function Botao({ valor, acao }: any) {
    return (
        <TouchableOpacity onPress={acao} style={estilos.botao}>
            <Text style={estilos.valor}>{valor}</Text>
        </TouchableOpacity>
    )
}