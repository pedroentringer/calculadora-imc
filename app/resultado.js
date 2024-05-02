import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";

import Header from "../components/header";
import Button from "../components/button";
import { CardValue, CardResultadoIMC } from "../components/card";

const ResultadoDoIMC = ({ titulo, subtitulo, corDeFundo }) => {
  return (
    <View style={{ padding: 16, backgroundColor: corDeFundo, borderRadius: 8 }}>
      <Text style={{ color: "#ffffff", fontSize: 16, fontWeight: "bold" }}>
        {titulo}
      </Text>
      <Text style={{ color: "#ffffff", fontSize: 14 }}>{subtitulo}</Text>
    </View>
  );
};

export default function Page() {
  const { peso, altura } = useLocalSearchParams();

  const alturaEmMetros = altura / 100;
  const imc = peso / alturaEmMetros ** 2;

  const tabelaDeImc = [
    {
      max: Infinity,
      classification: "Obesidade grau III",
      color: "#FF7262",
      subtitle: "Você precisa iniciar um acompanhamento com nutricionista",
    },
    {
      max: 39.9,
      classification: "Obesidade grau II",
      color: "#FF7262",
      subtitle: "Você precisa iniciar um acompanhamento com nutricionista",
    },
    {
      max: 34.9,
      classification: "Obesidade grau I",
      color: "#FF7262",
      subtitle: "Você precisa iniciar um acompanhamento com nutricionista",
    },
    {
      max: 29.9,
      classification: "Sobrepeso",
      color: "#FDB32A",
      subtitle: "Importante rever hábitos e buscar ajuda",
    },
    {
      max: 24.9,
      classification: "Peso Normal",
      color: "#75BF72",
      subtitle: "Que bom que você está com o peso normal",
    },
    {
      max: 18.5,
      classification: "Abaixo do normal",
      color: "#FDB32A",
      subtitle: "Talvez seja interessante procurar um médico",
    },
  ];

  const resultadoDoImc = tabelaDeImc.reduce((valorAnterior, valorAtual) => {
    if (imc <= valorAtual.max) {
      //meu imc é menor do que o maximo
      //então, vou retornar a classificação para a variável valorAntior
      return valorAtual;
    }

    return valorAnterior; //mantenho a classificação anteior
  }, "-");

  return (
    <View style={styles.container}>
      <Header />

      <View
        style={{
          flex: 1,
          padding: 32,
          justifyContent: "space-between",
          gap: 8,
        }}
      >
        <ResultadoDoIMC
          titulo={resultadoDoImc.classification}
          subtitulo={resultadoDoImc.subtitle}
          corDeFundo={resultadoDoImc.color}
        />

        <CardResultadoIMC imc={imc} />

        <View style={{ flexDirection: "row", gap: 8 }}>
          <CardValue valor={peso} label="Peso (kg)" />
          <CardValue valor={altura} label="Altura (cm)" />
        </View>

        <Button
          label="Voltar"
          href={{
            pathname: "/",
          }}
        />
      </View>
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
});
