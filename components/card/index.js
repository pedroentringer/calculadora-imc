import { TextLabel, TextValue } from "../texts";

import { BaseCardValue, BaseCardIMC } from "./styles";

export const CardValue = ({ valor, label }) => {
  return (
    <BaseCardValue>
      <TextValue valor={valor} />
      <TextLabel label={label} />
    </BaseCardValue>
  );
};

export const CardResultadoIMC = ({ imc }) => {
  const valorComDecimais = parseFloat(imc);

  return (
    <BaseCardIMC>
      <TextValue valor={valorComDecimais.toFixed(2)} />
      <TextLabel label="IMC" />
    </BaseCardIMC>
  );
};
