import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


/*Notifications
 * Send one when the schedule is released.
 * Send one someone messages you
 */
export default function MainScreen() {
  return (
    <View style={styles.container}>
      <div>
      <Text>Next SHift</Text>
      </div>
      <div>
     <Text>Swap Shifts</Text>
     </div>
     <div>
      <Text>Available Shifts NextAv/AvailableShiftsWeek</Text>
     </div>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
