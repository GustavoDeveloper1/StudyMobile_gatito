import React from "react";
import { SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from "react-native";
import globalStyle from '../../styles';


export default function TelaPadrao({ children }: any) {
    return (
        <SafeAreaView style={globalStyle.preencher}>
            <StatusBar />
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? 'padding' : 'height'}>
                {children}
            </KeyboardAvoidingView>

        </SafeAreaView>)
}