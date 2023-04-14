import { DripsyFinalTheme } from 'dripsy';

/**
 * To generate the styles for the search bar component
 *
 * @param theme - the theme of the plication
 * @param height - height of the window / screen
 * @param width - width of the window / screen
 * @param active - whether the search field is active
 * @param type - type of the search field
 * @returns styles for the search bar
 */
export const getSearchBarStyle = (
  theme: DripsyFinalTheme,
  height: number,
  width: number,
  active: boolean,
  type?: 'full-screen' | 'docked',
) => {
  const searchBarStyle = {
    height: 56,
    backgroundColor: theme.colors.$surface,
    borderRadius: 100,
    shadowColor: theme.colors?.$shadow,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  };

  const defaultResultsContainerStyle = {
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: theme.colors.$surface,
    flex: 1,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    width: '100%',
  };

  const activeFullScreenSearchBarStyle = {
    height: 72,
    borderRadius: 0,
    backgroundColor: theme.colors.$surface,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    borderBottomWidth: 1,
    borderColor: theme.colors.$outline,
    width: '100%',
  };

  const activeDockedSearchBarStyle = {
    height: 56,
    borderBottomRadius: 0,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    backgroundColor: theme.colors.$surface,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    borderBottomWidth: 1,
    borderColor: theme.colors.$outline,
  };

  const activeSearchBarContainerStyle =
    active && type === 'full-screen'
      ? {
          width,
          height,
        }
      : {};

  let defaultSearchBarStyle;
  if (active)
    defaultSearchBarStyle = type === 'full-screen' ? activeFullScreenSearchBarStyle : activeDockedSearchBarStyle;
  else defaultSearchBarStyle = searchBarStyle;

  return {
    defaultSearchBarStyle,
    defaultResultsContainerStyle,
    activeSearchBarContainerStyle,
  };
};
