import { AnuProvider } from 'anu/common/context';
import { generateTheme } from 'anu/config';
import { AnuSnackbarProvider } from 'anu/lib';

const MyTheme = generateTheme({
  theme: {},
  color: { primary: '#090C7D', secondary: '#7D0946', tertiary: '#7D7A09', neutral: '#929094' },
  colorScheme: 'light',
  extendDefaultTheme: true,
});

/**
 *
 * @param root0
 * @param root0.children
 */
export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <AnuProvider theme={MyTheme}>
      <AnuSnackbarProvider>{children}</AnuSnackbarProvider>
    </AnuProvider>
  );
}
