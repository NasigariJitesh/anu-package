import { Provider } from 'app/provider';
import { Stack } from 'expo-router';

/**
 *
 */
export default function Root() {
  return (
    <Provider>
     <Stack
        screenOptions={
          {
            // API Reference: https://reactnavigation.org/docs/native-stack-navigator#options
          }
        }
      >
        <Stack.Screen
          name="index"
          options={{
            headerLargeTitle: true,
            title: 'Anu Components',
          }}
        />
        <Stack.Screen
          name="components/auto-complete"
          options={{
            headerLargeTitle: true,
            title: 'Autocomplete',
          }}
        />
        

      </Stack>
    </Provider> 
  );
}
