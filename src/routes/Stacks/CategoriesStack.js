import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CategoriesScreen} from '../../screens/Categories';
const Stack = createNativeStackNavigator();
const CategoriesStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
    </Stack.Navigator>
  );
};

export default CategoriesStack;
