import React from "react";
import { Text, View } from "react-native";
import Botao from "../Botao/Index";

import styles from './style'

export default function StatusCarrinho({ total }: any) {
    return (
        <View style={styles.conteudo}>
            <View style={styles.total}>
                <Text style={styles.descricao}>Total do Carrinho:</Text>
                <Text style={styles.valor}>{Intl.NumberFormat('pt-Br', { style: 'currency', currency: "BRL" }).format(total)}</Text>
            </View>
            <View style={styles.botao}>
                <Botao valor="Concluir Pedido" invertido />
            </View>
        </View>
    )
}