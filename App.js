import React from "react";
import { Button, View, Text, Alert } from "react-native";
import { createStackNavigator } from "react-navigation";
import FormFun from "./FormFun";
import HttpExample from "./HttpExample";
import FetchExample from "./FetchExample"

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("Details")}
        />
        <Text>{`\n`}</Text>
        <Button
          title="Go to the Form"
          onPress={() => this.props.navigation.navigate("FormFun")}
        />
        <Text>{`\n`}</Text>
        <Button
          onPress={() => {
            Alert.alert("You tapped the button!");
          }}
          title="Press Me"
        />
        <Text>{`\n`}</Text>
        <Button
          title="Fetch component"
          onPress={() => this.props.navigation.navigate("HttpExample")}
        />
                <Text>{`\n`}</Text>
        <Button
          title="Fetch component 2"
          onPress={() => this.props.navigation.navigate("FetchExample")}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    FormFun: FormFun,
    HttpExample: HttpExample,
    FetchExample: FetchExample
  },
  {
    initialRouteName: "Home"
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
