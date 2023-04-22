/**
 *
 * @param withDateFormatInLabel
 * @param inputFormat
 * @param label
 */
export const getLabel = (withDateFormatInLabel: boolean, inputFormat: string, label?: string) => {
  if (withDateFormatInLabel) {
    return label ? `${label} (${inputFormat})` : inputFormat;
  }
  return label || '';
};

export const getDatePickerInputWithoutModalStyles = () => {
  const root = {
    flexGrow: 1,
  };
  const inputContainer = {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  } as const;
  const input = {
    flexGrow: 1,
  };

  return { root, inputContainer, input };
};
