import { StyleSheet, Text, View } from 'react-native';
import DetailTodo from '../components/DetailTodo';

export default function DetailScreen(props) {
  return (
    <View style={styles.container}>
        <DetailTodo {...props} />
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
