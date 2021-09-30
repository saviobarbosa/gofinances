import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button
} from "react-native";

export function Profile(){
    return (
        <View>
            <Text testID="text-title">
                Profile
            </Text>

            <TextInput
                testID="input-name"
                placeholder="Nome"
                autoCorrect={false}
                value="Sávio"
            />

            <TextInput
                testID="input-surname"
                placeholder="Sobrenome"
                value="Barbosa"
            />

            <Button
                title="Salvar"
                onPress={() => {}}
            />
        </View>
    );
}