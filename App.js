import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import store from './components/redux/Store';
import HomeScreen from "./screen/HomeScreen"
import AddTodoScreen from './screen/AddTodoScreen';
import DetailScreen from './screen/DetailScreen';


const Stack = createStackNavigator()


export default function App() {
  return (
    <Provider store={store} >
      <NavigationContainer>
        <Stack.Navigator  >
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Add Todo' component={AddTodoScreen} />
          <Stack.Screen name='Detail Todo' component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
