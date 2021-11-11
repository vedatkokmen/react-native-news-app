import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import All from "./screens/All";
import Business from "./screens/Business";
import HealthScreen from "./screens/Health";
import SportsScreen from "./screens/Sports";
import TechScreen from "./screens/Tech";
import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="All"
          component={All}
          options={{
            tabBarIcon: (props) => (
              <Icon type="feather" name="home" color={props.color} />
            ),
          }}
        />

        <Tab.Screen
          name="Business"
          component={Business}
          options={{
            tabBarIcon: (props) => (
              <Icon type="feather" name="dollar-sign" color={props.color} />
            ),
          }}
        />

        <Tab.Screen
          name="Health"
          component={HealthScreen}
          options={{
            tabBarIcon: (props) => (
              <Icon type="feather" name="heart" color={props.color} />
            ),
          }}
        />

        <Tab.Screen
          name="Sports"
          component={SportsScreen}
          options={{
            tabBarIcon: (props) => (
              <Icon
                type="ionicon"
                name="tennisball-outline"
                color={props.color}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Tech"
          component={TechScreen}
          options={{
            tabBarIcon: (props) => (
              <Icon
                type="ionicon"
                name="hardware-chip-outline"
                color={props.color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
