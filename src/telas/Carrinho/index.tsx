import React from "react";
import { FlatList } from "react-native";
import Item from "./item";

import TelaPadrao from "../../Components/TelaPadrao";
import StatusCarrinho from "../../Components/StatusCarrinho";

const services = [
    {
        id: 1,
        nome: "Banho",
        preco: 79.90,
        descricao: "NÃO DÊ BANHO NO SEU GATO! Mas se quiser nos damos.",
        quantidade: 1
    },
    {
        id: 2,
        nome: "Vacina v4",
        preco: 89.90,
        descricao: "UMA DOSE DA VACINA V4 A CADA 3 MESES!",
        quantidade: 6
    },
    {
        id: 3,
        nome: "Vacina Antirrábica",
        preco: 109.90,
        descricao: "UMA DOSE DA VACINA POR ANO SEU GATO ESTA SALVO!",
        quantidade: 5
    },

]


export default function Carrinho() {

    const total = services.reduce((soma: any, { preco, quantidade }: any) => soma + (preco * quantidade), 0)
    return (
        < >
            <StatusCarrinho total={total} />
            <FlatList data={services}
                keyExtractor={({ id }) => String(id)}
                renderItem={({ item }: any) => <Item id={item.id}
                    nome={item.nome}
                    preco={item.preco}
                    descricao={item.descricao}
                    quantidade={item.quantidade} />} />
        </>
    )

}