import { AnuProvider } from 'anu/common/context';
import { makeTheme } from 'anu/config';
import { AnuSnackbarProvider } from 'anu/lib';

const theme = makeTheme({});

/**
 *
 * @param root0
 * @param root0.children
 */
export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <AnuProvider theme={theme}>
      <AnuSnackbarProvider>{children}</AnuSnackbarProvider>
    </AnuProvider>
  );
}
