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
          name='index'
          options={{
            headerLargeTitle: true,
            title: 'Anu Components',
          }}
        />
        <Stack.Screen
          name='components/auto-complete'
          options={{
            headerLargeTitle: true,
            title: 'Autocomplete',
          }}
        />
        <Stack.Screen
          name='components/auto-complete-test'
          options={{
            headerLargeTitle: true,
            title: 'Autocomplete Test',
          }}
        />
        <Stack.Screen
          name='components/typography'
          options={{
            headerLargeTitle: true,
            title: 'Typography',
          }}
        />
        <Stack.Screen
          name='components/typography-test'
          options={{
            headerLargeTitle: true,
            title: 'Typography Test',
          }}
        />
      </Stack>
    </Provider>
  );
}
