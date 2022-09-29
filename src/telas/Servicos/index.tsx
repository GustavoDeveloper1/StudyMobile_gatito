import React from "react";
import { FlatList } from "react-native";
import TelaPadrao from "../../Components/TelaPadrao";
import Item from "./item";

export default function Servicos() {

    const services = [
        {
            id: 1,
            nome: "Banho",
            preco: 79.90,
            descricao: "NÃO DÊ BANHO NO SEU GATO! Mas se quiser nos damos."
        },
        {
            id: 2,
            nome: "Vacina v4",
            preco: 89.90,
            descricao: "UMA DOSE DA VACINA V4 A CADA 3 MESES!"
        },
        {
            id: 3,
            nome: "Vacina Antirrábica",
            preco: 109.90,
            descricao: "UMA DOSE DA VACINA POR ANO SEU GATO ESTA SALVO!"
        },

    ]

    return (

        <TelaPadrao>
            <FlatList
                data={services}
                keyExtractor={({ id }) => String(id)}
                renderItem={({ item }: any) =>
                    <Item id={item.id}
                        nome={item.nome}
                        preco={item.preco}
                        descricao={item.descricao}
                        quantidade={item.quantidade} />} />
        </TelaPadrao>
    )

}