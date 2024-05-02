import { View, Image, SafeAreaView } from "react-native";

import Logo from "../../assets/logo-bora-de-app.png";

import {
  HeaderContainer,
  HeaderContent,
  HeaderTitle,
  HeaderSubtitle,
} from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <SafeAreaView />
      <HeaderContent>
        <Image width={60} height={60} source={Logo} />

        <View>
          <HeaderTitle>Calculadora</HeaderTitle>
          <HeaderSubtitle>De IMC</HeaderSubtitle>
        </View>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
