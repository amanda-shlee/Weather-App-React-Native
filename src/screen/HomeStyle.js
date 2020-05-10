import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  text: {
    padding: 20,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  weatherIconWrapper: {
    top: -85,
    left: '65%',
  },
  temperature: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '500',
    fontSize: 48,
  },
  weatherWrapper: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 1,
  },
  weather: {
    color: 'grey',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  weatherIcon: {
    width: 20,
    height: 30,
    resizeMode: 'contain',
  },
  // resizeMOde:cover
  iconStyle: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    padding: 10,
    borderRadius: 20,
    borderColor: 'grey',
    borderWidth: 0.3,
  },
  iconContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    paddingRight: 40,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  date: {
    textAlign: 'left',
    color: '#22252A',
    fontWeight: '400',
    fontSize: 16,
    paddingVertical: 10,
  },
  smallTemperature: {
    textAlign: 'center',
    color: '#22252A',
    fontWeight: '500',
    fontSize: 28,
    paddingVertical: 10,
  },
  network: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  networkText: {
    textAlign: 'center',
    color: '#22252A',
    fontSize: 10,
  },
});

export default styles;
