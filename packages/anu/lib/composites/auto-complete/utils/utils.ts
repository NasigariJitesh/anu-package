import { getColorInRGBA } from 'anu/common/utils';
import { DripsyFinalTheme } from 'dripsy';

/**
 * To generate style for the standard variant of the auto complete
 *
 * @param theme
 * @param theme.colors - the colors according to theme
 * @param disabled - whether field is disabled
 * @returns style of the dripsy text field
 */
export const getStandardAutoCompleteStyles = ({ colors }: DripsyFinalTheme, disabled?: boolean) => {
  const defaultAutoCompleteStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    color: disabled ? getColorInRGBA(colors.$onSurface, 38) : colors.$onSurface,
    height: 56,
    width: '100%',
    paddingVertical: 0,
    paddingHorizontal: 0,
    cursor: 'text',
  } as const;

  const defaultInputAreaStyle = {
    fontSize: 16,
    lineHeight: 24,
    height: 56,
    fontWeight: '400' as const,
    outline: 'none',
    flex: 1,
    minWidth: 0,
    paddingHorizontal: 18,
    color: disabled ? getColorInRGBA(colors.$onSurface, 38) : colors.$onSurface,
    letterSpacing: 0.5,
    caretColor: 'inherit',
    backgroundColor: 'transparent',
  } as const;

  const leadingComponentContainerStyle = {
    paddingLeft: 8,
    color: 'inherit',
    backgroundColor: disabled ? 'inherit' : 'transparent',
    alignItems: 'center',
    flexDirection: 'row',
  } as const;

  const trailingComponentContainerStyle = {
    paddingRight: 8,
    color: 'inherit',
    backgroundColor: disabled ? 'inherit' : 'transparent',
    alignItems: 'center',
    flexDirection: 'row',
  } as const;

  return {
    defaultAutoCompleteStyle,
    defaultInputAreaStyle,
    leadingComponentContainerStyle,
    trailingComponentContainerStyle,
  };
};

/**
 * to generate styles for the autocomplete
 *
 * @param theme - the theme of the application
 * @returns styles for the autocomplete component
 */
export const getAutoCorrectStyles = (theme: DripsyFinalTheme) => {
  const defaultAutoCorrectContainerStyle = {
    alignItems: 'center',
    width: 250,
  } as const;

  const defaultResultsContainerStyle = {
    backgroundColor: theme.colors.$surface,
    shadowColor: theme.colors?.$shadow,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    width: '100%',
  } as const;

  return { defaultAutoCorrectContainerStyle, defaultResultsContainerStyle };
};
