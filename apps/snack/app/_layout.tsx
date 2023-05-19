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
          name='components/common-button'
          options={{
            headerLargeTitle: true,
            title: 'Common Button',
          }}
        />
        <Stack.Screen
          name='components/icon-button'
          options={{
            headerLargeTitle: true,
            title: 'Icon Button',
          }}
        />
        <Stack.Screen
          name='components/fab'
          options={{
            headerLargeTitle: true,
            title: 'Floating Action Button',
          }}
        />
        <Stack.Screen
          name='components/extended-fab'
          options={{
            headerLargeTitle: true,
            title: 'Extended Floating Action Button',
          }}
        />
        <Stack.Screen
          name='components/segmented-button'
          options={{
            headerLargeTitle: true,
            title: 'Segmented Button',
          }}
        />
        <Stack.Screen
          name='components/container'
          options={{
            headerLargeTitle: true,
            title: 'Container',
          }}
        />
        <Stack.Screen
          name='components/divider'
          options={{
            headerLargeTitle: true,
            title: 'Divider',
          }}
        />
        <Stack.Screen
          name='components/menu'
          options={{
            headerLargeTitle: true,
            title: 'Menu',
          }}
        />
        <Stack.Screen
          name='components/password-input'
          options={{
            headerLargeTitle: true,
            title: 'Password Input',
          }}
        />
        <Stack.Screen
          name='components/phone-input'
          options={{
            headerLargeTitle: true,
            title: 'Phone Input',
          }}
        />
        <Stack.Screen
          name='components/search'
          options={{
            headerLargeTitle: true,
            title: 'Search',
          }}
        />
        <Stack.Screen
          name='components/text-field'
          options={{
            headerLargeTitle: true,
            title: 'Text Field',
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
          name='components/auto-complete-test'
          options={{
            headerLargeTitle: true,
            title: 'Autocomplete Test',
          }}
        />

        <Stack.Screen
          name='components/common-button-test'
          options={{
            headerLargeTitle: true,
            title: 'Common Button Test',
          }}
        />
        <Stack.Screen
          name='components/icon-button-test'
          options={{
            headerLargeTitle: true,
            title: 'Icon Button Test',
          }}
        />
        <Stack.Screen
          name='components/fab-test'
          options={{
            headerLargeTitle: true,
            title: 'Floating Action Button Test',
          }}
        />
        <Stack.Screen
          name='components/extended-fab-test'
          options={{
            headerLargeTitle: true,
            title: 'Extended Floating Action Button Test',
          }}
        />
        <Stack.Screen
          name='components/segmented-button-test'
          options={{
            headerLargeTitle: true,
            title: 'Segmented Button Test',
          }}
        />
        <Stack.Screen
          name='components/container-test'
          options={{
            headerLargeTitle: true,
            title: 'Container Test',
          }}
        />
        <Stack.Screen
          name='components/divider-test'
          options={{
            headerLargeTitle: true,
            title: 'Divider Test',
          }}
        />
        <Stack.Screen
          name='components/menu-test'
          options={{
            headerLargeTitle: true,
            title: 'Menu Test',
          }}
        />
        <Stack.Screen
          name='components/password-input-test'
          options={{
            headerLargeTitle: true,
            title: 'Password Input Test',
          }}
        />
        <Stack.Screen
          name='components/search-test'
          options={{
            headerLargeTitle: true,
            title: 'Search Test',
          }}
        />
        <Stack.Screen
          name='components/text-field-test'
          options={{
            headerLargeTitle: true,
            title: 'Text Field Test',
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
