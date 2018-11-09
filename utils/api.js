import axios from "axios";
import { AsyncStorage } from "react-native";

const fetchData = () => {
  AsyncStorage.getItem("zippy", (err, result) => {
    if (err) console.log(err);
    console.log(result);
    let obj = JSON.parse(result);
    console.log(obj.zipKey);
    let zipApi = obj.zipKey;
    console.log(zipApi);
  });
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
  const encodedURI = window.encodeURI(
    // `http://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=${zipApi}&date=${newdate}&distance=25&API_KEY=98394834-0971-40F7-82FE-8752A5FA0D51`
    `http://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=78753&date=${newdate}&distance=25&API_KEY=98394834-0971-40F7-82FE-8752A5FA0D51`
  );
  console.log(encodedURI);
  return axios.get(encodedURI).then(res => res.data);
};

export default fetchData;
