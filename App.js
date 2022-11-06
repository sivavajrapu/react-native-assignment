import React from 'react'
import {Provider} from 'react-redux';
import {Store} from './src/redux/store'
import PhoneLogin from './src/components/PhoneLogin';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './src/components/Home';
import Map from './src/components/Map';
import AddProducts from './src/components/AddProducts';
import ProductDetail from './src/components/ProductDetail';
 
export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={PhoneLogin} options={{headerShown:false}}/>
          <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
          <Stack.Screen name="Map" component={Map} options={{headerShown:false}}/>
          <Stack.Screen name="AddProducts" component={AddProducts} options={{headerShown:false}}/>
          <Stack.Screen name="ProductDetail" component={ProductDetail} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}