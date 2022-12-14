import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Botao from "../../../Components/Botao/Index";
import CampoInteiro from "../../../Components/CampoInteiro";
import { ServicesTypes } from "../../../utils/Servicos";
import { Style } from "./style";


export default function Item({ id, nome, preco, descricao }: ServicesTypes) {

    const [quantidade, setQuantidade] = useState(1);
    const [total, setTotal] = useState(preco);
    const [expandir, setExpandir] = useState(false);


    const atualizaQtdandTotal = (novaQtd: any) => {
        setQuantidade(novaQtd);
        calculaTotal(novaQtd)
    }

    const calculaTotal = (novaQtd: any) => {
        setTotal(novaQtd * preco);
    };

    const inverterExpandir = () => {
        setExpandir(!expandir);

        atualizaQtdandTotal(1)
    }

    return (
        <>
            <TouchableOpacity style={Style.informacao} onPress={inverterExpandir}>
                <Text style={Style.nome}>{nome}</Text>
                <Text style={Style.descricao}>{descricao}</Text>
                <Text style={Style.preco}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco)}</Text>
            </TouchableOpacity>
            {expandir && <View style={Style.carrinho}>
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
                <Botao valor="Adicionar ao Carrinho" />
            </View>}
            <View style={Style.divisor}>

            </View>
        </>
    )
}