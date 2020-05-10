import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import {API_URL, API_KEY, LOCATION} from 'react-native-dotenv';
import styles from './HomeStyle';
import WeatherPNG from '../component/WeatherPNG';
import moment from 'moment';

const Home = ({navigation}) => {
  const day = moment().format('dddd');
  const date = moment().format('Do MMMM YYYY');
  const [data, setData] = useState([]);
  const [description, setDescription] = useState('');
  const [temperature, setTemperature] = useState('');
  const netInfo = useNetInfo();

  const getCurrentUrl = `${API_URL}/weather?q=${LOCATION}&units=metric&appid=${API_KEY}`;
  const getForecastUrl = `${API_URL}/forecast?q=${LOCATION}&units=metric&appid=${API_KEY}`;
  useEffect(() => {
    axios
      .get(getCurrentUrl)
      .then(result => {
        console.log('Current result:', result.data);
        const {main, weather} = result.data;
        setTemperature(Math.floor(main.temp));
        setDescription(weather[0].main);
      })
      .catch(error => {
        console.error('Error:', error.response);
      });
  }, []);

  useEffect(() => {
    axios
      .get(getForecastUrl)
      //JSON.parse change text into object
      .then(response => {
        // .then(response => response.JSON.parse())
        // .then(success => {
        console.log('Forecast result:', response);
        console.log('Response:', typeof response);
        console.log('Response.data:', typeof response.data);
        console.log('Response.data.list:', typeof response.data.list);
        //return response is object
        let output = [];
        //need to map through and array (response is an object)
        //check on https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=439d4b804bc8187953eb36d2a8c26a02
        response.data.list.map((item, ind) => {
          //nested object destructuring
          const forecast = {
            id: item.dt,
            date: item.dt_txt,
            temperature: Math.floor(item.main.temp),
            weather: item.weather[0].main,
          };
          output.push(forecast);
        });
        setData(output);
        console.log('Output:', output);
      })
      .catch(error => {
        console.error('Error', error.response);
      });
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.network}>
          <Text style={styles.networkText}>
            Are you connected : {netInfo.isConnected.toString()}
          </Text>
          <Text style={styles.networkText}>
            You are currently connect to {netInfo.type}
          </Text>
        </View>
        <Text style={styles.text}>
          {day} {date}
        </Text>
        <Text style={styles.temperature}>{temperature}</Text>
        <Text style={styles.weather}>{description}</Text>
        <View style={styles.weatherIconWrapper}>
          <WeatherPNG weather={description} style={styles.weatherIcon} />
        </View>
        <FlatList
          keyExtractor={item => item.id}
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ReminderScreen', {data: item})
              }
              style={styles.itemContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.date}>{item.date}</Text>
                <Text style={styles.smallTemperature}>{item.temperature}</Text>
                <Text style={styles.weather}>{item.weather}</Text>
              </View>
              <View style={styles.iconContainer}>
                <WeatherPNG weather={item.weather} />
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </>
  );
};

export default Home;
