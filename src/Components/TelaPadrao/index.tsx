import React from "react";
import { SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from "react-native";
import globalStyle, { cores } from '../../styles';
import estilo from "./estilos";

export default function TelaPadrao({ children }: any) {
    return (
        <>
            <SafeAreaView style={globalStyle.preencher}>
                <StatusBar backgroundColor={cores.roxo} />
                <KeyboardAvoidingView behavior={Platform.OS == "ios" ? 'padding' : 'height'}>
                    {children}
                </KeyboardAvoidingView>

            </SafeAreaView>
            <SafeAreaView style={estilo.ajusteTelaBaixo}/>
        </>)
}