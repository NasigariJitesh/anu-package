/**
 * To get label of the date input field
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
  const root = { flex: 1, width: '100%' };
  const inputContainer = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  } as const;
  const input = { flex: 1, width: '100%' };

  return { root, inputContainer, input };
};
