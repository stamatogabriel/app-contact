import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";

import Contacts from "./src/pages/Contacts";
import Informations, { InformationProps } from "./src/pages/Informations";
import AppContacts from "./src/pages/AppContacts";
import { useCallback } from "react";

export type RootStackProps = {
  Contacts: undefined;
  Informations: InformationProps;
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

export default function App() {
  const Tabs = useCallback(() => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={AppContacts} />
        <Tab.Screen name="Contacts" component={Contacts} />
      </Tab.Navigator>
    );
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AppContacts" component={Tabs} />
        <Stack.Screen name="Informations" component={Informations} />
      </Stack.Navigator>
      {/* <Drawer.Navigator>
        <Drawer.Screen name="Contacts" component={Contacts} />
        <Drawer.Screen name="Informations" component={Informations} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
}
