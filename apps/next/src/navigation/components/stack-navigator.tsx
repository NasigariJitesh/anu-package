import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackNavigationProps } from 'navigation';
import { Details, Home } from 'screens';

const Stack = createNativeStackNavigator<StackNavigationProps>();

/**
 *
 */
function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='home' component={Home} />
      <Stack.Screen name='details' component={Details} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
