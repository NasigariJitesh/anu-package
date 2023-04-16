import { DripsyFinalTheme } from 'dripsy';
import { StyleSheet } from 'react-native';

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
    width: '100%',
  };

  const resultsContainerStyle = {
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
    top: 56,
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
    zIndex: 100,
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
    width: '100%',
  };
  const containerStyle = { width: '100%' };

  let activeSearchBarContainerStyle;
  let defaultSearchBarStyle;
  let defaultResultsContainerStyle;
  let defaultContainerStyle;

  if (active) {
    defaultSearchBarStyle = type === 'full-screen' ? activeFullScreenSearchBarStyle : activeDockedSearchBarStyle;
    defaultResultsContainerStyle =
      type === 'full-screen' ? { ...resultsContainerStyle, top: 72, height: '100%' } : resultsContainerStyle;
    defaultContainerStyle =
      type === 'full-screen' ? { ...containerStyle, ...StyleSheet.absoluteFillObject, zIndex: 1000 } : containerStyle;
    activeSearchBarContainerStyle =
      type === 'full-screen'
        ? {
            ...StyleSheet.absoluteFillObject,
            height,
            width,
            zIndex: 1000,
          }
        : { zIndex: 1000 };
  } else {
    defaultSearchBarStyle = searchBarStyle;
    defaultResultsContainerStyle = resultsContainerStyle;
    defaultContainerStyle = containerStyle;
    activeSearchBarContainerStyle = { zIndex: 1000 };
  }

  return {
    defaultSearchBarStyle,
    defaultResultsContainerStyle,
    activeSearchBarContainerStyle,
    defaultContainerStyle,
  };
};
