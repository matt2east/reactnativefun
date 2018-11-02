import React, { Component } from "react";
import { View, Text } from "react-native";

class HttpExample extends Component {
  state = {
    data: ""
  };
  componentDidMount = () => {
    fetch(
      "http://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=20002&date=2018-10-31&distance=25&API_KEY=98394834-0971-40F7-82FE-8752A5FA0D51",
      {
        method: "GET"
      }
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          data: responseJson
        });
        console.log('data is ' + this.state.data.body)
      })
      .catch(error => {
        console.error(error);
      });
  };
  render() {
    return (
      <View>
        <Text>data is</Text>
        <Text>{JSON.stringify(this.state.data.body, null, 2)}</Text>
      </View>
    );
  }
}
export default HttpExample;
