import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import { RootStackProps } from "../../../App";

export interface InformationProps {
  name: string;
  phone: string;
  email: string;
  address: string;
  district: string;
}

type Props = NativeStackScreenProps<RootStackProps, "Informations">;

const Informations: React.FC<Props> = ({ route }) => {
  return (
    <View style={{ marginTop: 60 }}>
      <Text>Nome: {route.params?.name}</Text>
      <Text>Telefone: {route.params?.phone}</Text>
      <Text>email: {route.params?.email}</Text>
      <Text>{route.params?.address}</Text>
      <Text>{route.params?.district}</Text>
    </View>
  );
};

export default Informations;
