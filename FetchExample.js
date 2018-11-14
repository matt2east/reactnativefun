import React from "react";
import {
  FlatList,
  ActivityIndicator,
  Text,
  View,
  AsyncStorage
} from "react-native";
import axios from "axios";

class FetchExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      airQuality:"",
    };
  }

  getZip = async () => {
    try {
      const result = await AsyncStorage.getItem("zippy");
      if (result) {
        const zipObj = JSON.parse(result);
        return zipObj.zipKey;
      }
    } catch (err) {
      console.log(err);
    }
  };

  async componentDidMount() {
    try {
      const dateObj = new Date();
      let month = dateObj.getUTCMonth() + 1; //months from 1-12
      let day = dateObj.getUTCDate();
      const year = dateObj.getUTCFullYear();
      if (month < 10) {
        month = "0" + month;
      }
      if (day < 10) {
        day = "0" + day;
      }
      const newdate = year + "-" + month + "-" + day;

      const zip = await this.getZip();
      const encodedURI = window.encodeURI(
        `http://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=${zip}&date=${newdate}&distance=25&API_KEY=98394834-0971-40F7-82FE-8752A5FA0D51`
      );
      const { data } = await axios.get(encodedURI);
      this.setState({
        airQuality: data[0].Category.Name
      });
      // console.log(data)
      // console.log("drilling into data " +JSON.stringify(this.state.data[0].DateIssue))
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const {
      airQuality
    } = this.state;
    return (
      <View>
        <Text>Air Quality: {JSON.stringify(airQuality)}</Text>
      </View>
    );
  }
}

export default FetchExample;
