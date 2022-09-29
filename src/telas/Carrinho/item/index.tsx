import React, { useState } from "react";
import { Text, View } from "react-native";
import Botao from "../../../Components/Botao/Index";
import CampoInteiro from "../../../Components/CampoInteiro";
import { ServicesTypes } from "../../../utils/Servicos";
import { Style } from "./style";


export default function Item({ id, nome, preco, descricao, quantidade: quantidadeInicial }: ServicesTypes) {

    const [quantidade, setQuantidade] = useState(quantidadeInicial);
    const [total, setTotal] = useState(preco * quantidadeInicial);



    const atualizaQtdandTotal = (novaQtd: any) => {
        setQuantidade(novaQtd);
        calculaTotal(novaQtd)
    }

    const calculaTotal = (novaQtd: any) => {
        setTotal(novaQtd * preco);
    };


    return (
        <>
            <View style={Style.informacao} >
                <Text style={Style.nome}>{nome}</Text>
                <Text style={Style.descricao}>{descricao}</Text>
                <Text style={Style.preco}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco)}</Text>
            </View>
            <View style={Style.carrinho}>
                <View>
                    <View style={Style.valor}>
                        <Text style={Style.descricao}>Quantidade:</Text>
                        <CampoInteiro estilos={Style.quantidade} valor={quantidade} acao={atualizaQtdandTotal} />
                    </View>
                    <View style={Style.valor}>

                        <Text style={Style.descricao}>Total:</Text>
                        <Text style={Style.preco}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}</Text>

                    </View>
                </View>
                <Botao valor="Remover do Carrinho" />
            </View>
            <View style={Style.divisor}>

            </View>
        </>
    )
}