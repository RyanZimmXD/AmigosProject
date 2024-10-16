import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import react, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MoreInfoSchedule } from './ScheduleOverview';

/**
 * M,T,W,T,F,S,S
 * Highlight Current Day
 * Show there work scheudle - ex) 9am-5pm  || 9am-1pm ; 3pm-7pm
 * If day is selected it goes into a more detailed version of the day, showing who you work
 * also gives u a option to put you shift up for grabs.
 */

const ScheduleScreen = ({ navigation }) => {

  const [schedule, setSchedule] = useState([{ id: 0, date: "", todayHours: 0, shiftTimes: [] }]);
  const [weeklyHours, setTotalHoursWeekly] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true); //By default is loading till it gets results/error

  useEffect(() => {
    fetch('https://localhost:7126/api/AmigosAPI/1155')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json();
      })
      .then(data => {
        setSchedule(data);
        setLoading(false);
      })
      .catch(error => {setError("Failed to retreive your schedule.\nPlease Try Later."); setLoading(false);}) // Come back later finish the error catching
  }, []);

  /*
  const totalHours = data.reduce((total, currDay) => total + currDay.todayHours, 0);
  setTotalHoursWeekly(totalHours); 
  */

  return (
    <View style={styles.container}>
      {loading ? (
        //Loading while we fetch results
        <View>
          <Text>Loading...</Text>
        </View>
      ) : (
        //Displays the results if there was no error
        error === "" ? (
          <View>
            <View style={styles.WeeklyDisplay}>
              <Text style={styles.WeeklyHoursText}>Hours This Week: {weeklyHours}</Text>
            </View>
            {schedule.map((item, index) => ( 
              <View style={styles.DayContainer} key={index}>
                <Text style={styles.DateText}>{item.date}</Text>
                <Text>Total Hours: {item.todayHours} hours</Text>
                <Button title="More Info" onPress={() => navigation.navigate("ScheduleOverview", {date: item.date})}/>
              </View>
            ))}
          </View>
        ) : (
          //Happens if we got an error
          <View>
            <Text>{error}</Text>
          </View>
        )
      )}
    </View>
  );
};





const styles = StyleSheet.create({
  container: {
    marginLeft: '10%',
    marginRight: '10%',
  },
  WeeklyDisplay: {

  },
  DateText: {
    fontSize: 20,
  },
  WeeklyHoursText: {
    fontSize: 30,
  },

  DayContainer: {
    marginBottom: 10,
    //Padding
    paddingLeft: 10,
    paddingVertical: 10,
    //Border Stuff
    borderWidth: 1,
    borderColor: "red"
  },
});
export default ScheduleScreen;
