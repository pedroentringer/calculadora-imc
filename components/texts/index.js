import { Text } from "react-native";

export const TextValue = ({ valor }) => {
  return <Text style={{ fontSize: 40, fontWeight: "bold" }}>{valor}</Text>;
};

export const TextLabel = ({ label }) => {
  return <Text style={{ fontSize: 18 }}>{label}</Text>;
};
