import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
import { RootStackProps } from "../../../App";

type Props = NativeStackScreenProps<RootStackProps, "Contacts">;

const Contacts: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ marginTop: 60 }}>
      <View>
        <Text>Nome: Gabriel Stamato</Text>
        <Text>telefone: (11) 1111-1111</Text>
        <Text
          onPress={() =>
            navigation.navigate("Informations", {
              name: "Gabriel Stamato",
              phone: "(11) 1111-1111",
              email: "stamato7@gmail.com",
              address: "Rua Alemanha, 95",
              district: "Jd Europa",
            })
          }
        >
          Informations...
        </Text>
      </View>
      <View style={{ marginTop: 60 }}>
        <Text>Nome: Tatiana Bueno Stamato</Text>
        <Text>telefone: (11) 1111-1111</Text>
        <Text onPress={() => navigation.navigate("Informations", {
              name: "Tatiana Bueno Stamato",
              phone: "(11) 1111-1111",
              email: "bueno7@gmail.com",
              address: "Rua Alemanha, 95",
              district: "",
            })}>
          Informations...
        </Text>
      </View>
    </View>
  );
};

export default Contacts;
