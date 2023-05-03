import { Provider as AnuProvider } from './anu';

/**
 *
 * @param root0
 * @param root0.children
 */
export function Provider({ children }: { children: React.ReactNode }) {
  return <AnuProvider>{children}</AnuProvider>;
}
