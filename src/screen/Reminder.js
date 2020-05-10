import * as React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const reminderDetails = [
  {
    id: 0,
    reminder:
      'Bring umbrella to Next Academy cause Next Academy do not have umbrella',
  },
];
const setReminder = ({route}) => {
  const {data} = route.params;
  // navigation.navigate('ReminderScreen', {data: item});
  const getReminder = item => {
    return (
      <View style={styles.viewRemind}>
        <Text style={styles.textOne}>{item.reminder}</Text>
        <View style={styles.viewDetails}>
          <Text style={styles.textTwo}>{data.weather}</Text>
          <Text style={styles.textTwo}>{data.date}</Text>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={reminderDetails}
        renderItem={({item}) => getReminder(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewRemind: {
    flex: 1,
    margin: 20,
    padding: 20,
    borderRadius: 20,
    borderColor: 'grey',
    borderWidth: 0.3,
  },
  viewDetails: {
    flexDirection: 'row',
  },
  textOne: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    fontSize: 16,
  },
  textTwo: {
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    marginBottom: 1,
    marginTop: 20,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default setReminder;
