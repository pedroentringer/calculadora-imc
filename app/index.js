import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { StatusBar } from "expo-status-bar";

import Header from "../components/header";
import Input from "../components/input";
import Button from "../components/button";

export default function Page() {
  const [peso, setPeso] = React.useState("");
  const [altura, setAltura] = React.useState("");

  return (
    <View style={styles.container}>
      <Header />
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.content}>
          <View style={styles.inputs}>
            <Input
              label="Peso (kg)"
              placeholder="Informe seu peso"
              value={peso}
              onChangeText={(text) => {
                setPeso(text);
              }}
            />

            <Input
              label="Altura (cm)"
              placeholder="Informe sua altura"
              value={altura}
              onChangeText={(text) => {
                setAltura(text);
              }}
            />
          </View>

          <Button
            label="Calcular"
            href={{
              pathname: "/resultado",
              params: {
                peso,
                altura,
              },
            }}
          />
        </View>
      </TouchableWithoutFeedback>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F5",
  },
  content: {
    flex: 1,
    padding: 32,
    justifyContent: "space-between",
  },
  inputs: {
    gap: 16,
  },
});
