import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TodoHeader from '../components/TodoHeader'
import TodoContent from '../components/TodoContent'

export default function AddTodoScreen(props) {
  return (
    <View style={styles.container}>
        <TodoHeader {...props} />
        <TodoContent {...props} />
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
