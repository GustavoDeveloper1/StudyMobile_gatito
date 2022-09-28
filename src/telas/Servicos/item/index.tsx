import React, { useState } from "react";
import { Text, View } from "react-native";
import Botao from "../../../Components/Botao/Index";
import CampoInteiro from "../../../Components/CampoInteiro";
import { ServicesTypes } from "../../../utils/Servicos";
import { Style } from "./style";


export default function Item({ id, nome, preco, descricao }: ServicesTypes) {

    const [quantidade, setQuantidade] = useState(1);

    return (
        <>
            <View style={Style.informacao}>
                <Text style={Style.nome}>{nome}</Text>
                <Text style={Style.descricao}>{descricao}</Text>
                <Text style={Style.preco}>{preco}</Text>
            </View>
            <View style={Style.carrinho}>
                <View>
                    <View style={Style.valor}>
                        <Text style={Style.descricao}>Quantidade:</Text>
                        <CampoInteiro estilos={Style.quantidade} valor={quantidade} acao={setQuantidade} />
                    </View>
                    <View style={Style.valor}>

                        <Text style={Style.descricao}>Preco:</Text>
                        <Text style={Style.preco}>0</Text>

                    </View>
                </View>
                <Botao valor="Adicionar" />
            </View>
            <View style={Style.divisor}>

            </View>
        </>
    )
}